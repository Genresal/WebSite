

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: !props.required,
      value: '',
      fileName: 'No file chosen',
      get valid(){
        return this.isValid;
      }
    };
    
  }
  componentDidMount() {
    console.log(this.props.id + ' mounted');
    this.StoreValues('');
  }

  handleChange = (event) => {
    let newValue = event.target.value;
    const { regex, required, type } = this.props;
    const { value } = this.state;

    if (type === 'file') {
      const isValid = event.target.files.length > 0;
      const fileName = isValid ? event.target.files[0].name : 'No file chosen';
      this.setState({ isValid, value: event.target.files, fileName });
    } 
    else if (type === 'checkbox'){
      const isValid = event.target.checked || !required;
      newValue = !value;
      this.setState({ isValid, value: !value });
    }
    else if (!required && regex && newValue.trim() === '') {
      this.setState({ isValid: true, value: newValue });
    } 
    else if (required && newValue.trim() === '') {
      this.setState({ isValid: false, value: newValue });
    } 
    else if (regex) {
      const isValid = regex.test(newValue);
      this.setState({ isValid, value: newValue });
    } 
    else {
      this.setState({ isValid: true, value: newValue });
    }
    this.StoreValues(newValue);
  };

  StoreValues(newValue){
    const { id, type } = this.props;

    this.setState({ value: newValue }, () => {
    const { isValid } = this.state;
    sessionStorage.setItem(id, JSON.stringify({ "isValid": isValid, "value": newValue, "type": type }));
  });
  }

  render() {
    const { placeholder, warning, required, type, variants, id } = this.props;
    const { isValid, value, fileName } = this.state;

    if (type === 'combo') {
      return (
        <div className="input-wrap">
          <select
            className={`input ${isValid ? '' : 'invalid'}`}
            value={value}
            id={id}
            onChange={this.handleChange}>
            <option value="" disabled hidden>Select an option</option>
            {variants.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          {(required && value === '') && (
            <span className="input-warning">This field is required</span>
          )}
          <span className={`input-warning ${isValid ? 'hidden' : ''}`}>{warning}</span>
        </div>
      );
    } 
    else if (type === 'file') {
      return (
        <div className="input-wrap">
          <input
            id={id}
            type="file"
            className={`input ${isValid ? '' : 'invalid'}`}
            onChange={this.handleChange}
            style={{display:"none"}}
          />
          <div className="file-input-box">
          <label htmlFor={id} className="file-button"></label>
          <span className="file-chosen">{fileName}</span>
          </div>

          {(required && value.length === 0) && (
            <span className="input-warning">This field is required</span>
          )}
          <span className={`input-warning ${isValid ? 'hidden' : ''}`}>{warning}</span>
        </div>
      );
    }
    else if (type === 'checkbox'){
      return (
        <div className="input-wrap">
          <input
            id={id}
            type="checkbox"
            className={`input ${isValid ? '' : 'invalid'}`}
            checked={value}
            onChange={this.handleChange}
            style={{display:"none"}}
          />
          <label htmlFor={id} className="checkbox-input">{placeholder}</label>
          {(required && value == false) && (
          <span className="input-warning">This field is required</span>
        )}
        </div>
      );
    }

    return (
      <div className="input-wrap">
        <input
          id={id}
          type="text"
          className={`input ${isValid ? '' : 'invalid'}`}
          placeholder={placeholder}
          value={value}
          onChange={this.handleChange}
        />
        {(required && value.trim() === '') && (
          <span className="input-warning">This field is required</span>
        )}
        {(!isValid && value.length !== 0) && (
          <span className={`input-warning ${isValid ? 'hidden' : ''}`}>{warning}</span>
          )}
      </div>
    );
  }
}

export default Input;
