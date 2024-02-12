import Input from './input.js';


class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedType: '',
      formSubmitted: false,
		};
	}

	isFormValid(items){
		const { selectedType } = this.state;

		if (items.length === 0){
			return false;
		}

		for (let item of items){
			if (!JSON.parse(sessionStorage.getItem(selectedType + '-' + item)).isValid){
				return false;
			}
		}

		return true;
	}

	Submit = (event) => {
		const { selectedType } = this.state;
		const { url } = this.props;
		let items = [];

		switch (selectedType){
			case 'job':
			case 'internship':
				items = [
					"name",
					"surname",
					"email",
					"phone",
					"office",
					"linkedin",
					"file",
					"comments",
					"consentForFutureVacancies",
					"consentForRecruitmentProcess",
					"consentForCompanyNews"
					];
				break;
			case 'cooperation':
				items = [
					"name",
					"surname",
					"email",
					"phone",
					"company",
					"fileInput",
					"comments",
					"privacyPolicyAgreement"
					];
				break;
		}
		if(this.isFormValid(items)){
			let form = new FormData();
			items.forEach((item) => {
				let inputObj = JSON.parse(sessionStorage.getItem(selectedType + '-' + item));

				if (inputObj.type == undefined || inputObj.type != 'file'){
					form.append(selectedType + '-' + item, inputObj.value);
				}
				else if (inputObj.type == 'file' && inputObj.value != ''){
					form.append(selectedType + '-' + item, document.querySelector('#' + selectedType + '-' + item).files[0]);
				}
			});
			fetch(url, { method: 'post', body: form });
		}

			
	}

	handleTypeChange = (event) => {
		this.setState({
			selectedType: event.target.value,
		});
	};

	renderInputsByType = () => {
		const { selectedType } = this.state;
		const offices = ["Mogilev", "Minsk", "New-York", "Tokio"];

		switch (selectedType) {
			case 'job':
			case 'internship':
				return [
					<Input id={selectedType + "-name"} key="name" placeholder="Name*" required={true}/>,
					<Input id={selectedType + "-surname"} key="surname" placeholder="Surname*" required={true}/>,
					<Input id={selectedType + "-email"} key="email" placeholder="Email*" warning="format: example@site.com" required={true} regex={/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}/>,
					<Input id={selectedType + "-phone"} key="phone" placeholder="Phone" warning="format: +375xxxxxxxxx" regex={/^(\+\d{1,4})?[\s\-]?\(?\d{1,4}\)?[\s\-]?\d{1,9}$/}/>,
					<Input id={selectedType + "-office"} key="office" placeholder="Office" type="combo" variants={offices} required={true}/>,
					<Input id={selectedType + "-linkedin"} key="linkedin" placeholder="Linkedin" warning="format: https://www.linkedin.com/in/" regex={/^(http|https):\/\/(www\.)?linkedin\.com\/in\/[A-Za-z]+/}/>,
					<Input id={selectedType + "-file"} key="file" placeholder="Resume*" type="file"/>
				];

			case 'cooperation':
				return [
					<Input id={selectedType + "-name"} key="kname" placeholder="Name*" required={true}/>,
					<Input id={selectedType + "-surname"} key="ksurname" placeholder="Surname*" required={true}/>,
					<Input id={selectedType + "-email"} key="kemail" placeholder="Email*" warning="format: example@site.com" required={true} regex={/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}/>,
					<Input id={selectedType + "-phone"} key="kphone" placeholder="Phone" warning="format: +375xxxxxxxxx" regex={/^(\+\d{1,4})?[\s\-]?\(?\d{1,4}\)?[\s\-]?\d{1,9}$/}/>,
					<Input id={selectedType + "-company"} key="company" placeholder="Company" required={true}/>
				];

			default:
				return null;
		}
	};

	renderAdditionalInfoBlock = () => {
    const { selectedType, consentForRecruitmentProcess } = this.state;

    if (selectedType === 'cooperation') {
      return (
        <div className="additional-info">
        	<span className="additional-info__title title">Additional Info</span>
            <Input
              id={selectedType + "-fileInput"}
              type="file"
              value={''}
              placeholder="File"
              />
            <Input
              id={selectedType + "-comments"}
              value={this.state.comments}
              placeholder="Comments..."
              />
              <Input
              	placeholder="I have read and agree to the Privacy Policy"
                id={selectedType + "-privacyPolicyAgreement"}
                type="checkbox"
                checked={this.state.privacyPolicyAgreement}
                />
        </div>
      );
    }
    else if (selectedType === 'job' || selectedType === 'internship'){
    	return (
        <div className="additional-info">
        	<span className="additional-info__title title">Additional Info</span>
            <Input
              id={selectedType + "-comments"}
              value={this.state.comments}
              placeholder="Comments..."
              onChange={(e) => this.setState({ comments: e.target.value })}
            />
            <p className="description" style={{paddingBottom:"16px"}}>Please review the Privacy Policy before submitting the form and agree to have your resume reviewed.</p>
              <Input
              	placeholder="I agree to the storage and processing of my personal data for consideration of my candidacy for future vacancies."
                id={selectedType + "-consentForFutureVacancies"}
                type="checkbox"
                checked={this.state.consentForFutureVacancies}
                />
              <Input
              	placeholder="I agree to the processing of my personal data for the consideration of my resume and participation in the recruitment process. *"
                id={selectedType + "-consentForRecruitmentProcess"}
                type="checkbox"
                required={true}
                checked={this.state.consentForRecruitmentProcess}
                />
              <Input
              	placeholder="I agree to receive information about company news and events."
              	id={selectedType + "-consentForCompanyNews"}
              	type="checkbox"
              	checked={this.state.consentForCompanyNews}
              	/>
        </div>
      );
    }
    return null;
  };

	render() {
		const { selectedType } = this.state;

		return (
			<div className="form">
				<div className="label">I wanna</div>
				<div className="row">
					<input
						id="type-1"
						type="radio"
						className="input-type"
						name="type"
						value="job"
						checked={selectedType === 'job'}
						onChange={this.handleTypeChange}
					/>
					<label className="type" htmlFor="type-1">
						Get a job
					</label>
					<input
						id="type-2"
						type="radio"
						className="input-type"
						name="type"
						value="internship"
						checked={selectedType === 'internship'}
						onChange={this.handleTypeChange}
					/>
					<label className="type" htmlFor="type-2">
						Get an internship
					</label>
					<input
						id="type-3"
						type="radio"
						className="input-type"
						name="type"
						value="cooperation"
						checked={selectedType === 'cooperation'}
						onChange={this.handleTypeChange}
					/>
					<label className="type" htmlFor="type-3">
						Offer cooperation
					</label>
				</div>

				<div className="inputs">
					{this.renderInputsByType()}
				</div>
				<div className="additional-block">
				{this.renderAdditionalInfoBlock()}
					<a className="button-link form-button" onClick={this.Submit}><button>Submit</button></a>
				</div>
			</div>
		);
	}
}

ReactDOM.createRoot(document.querySelector('.right-column_form')).render(<ContactForm url="https://google.com" />)