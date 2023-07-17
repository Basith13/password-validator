import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { requestPassword } from "../service/factories";

const RenderInput = () => {

  //State Initial Declaration
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [errorCount, setErrorCount] = useState("");

  //Dispatch Action
  const dispatch = useDispatch()

  const handleInput = useCallback((e) => {
    const { value } = e.target;
    if (value.length <= 20) {
      setValue(value);
    }
  }, []);


  const handleValidation = useCallback((data) => {
    let allow = true;
    let value_array = data.split("");
    if (
      value_array.some((e) => !parseInt(e) && e === String(e).toLowerCase()) &&
      value_array.some((e) => !parseInt(e) && e === String(e).toUpperCase()) &&
      value_array.some((e) => parseInt(e) === Number(e))
    ) {
      allow = false;
    }
    return allow;
  }, []);

  //Find Repeat the Character
  const handleRepeatedString = useCallback((data) => {
    let value_array = data.split("");
    let repeat_array = [];
    let allow = false;
    for (let i = 1; i < value_array.length; i++) {
      if (value_array[i - 1] === value_array[i]) {
        repeat_array.push(value_array[i]);
        if (repeat_array.length === 2) {
          allow = true;
          break;
        }
      } else {
        repeat_array = [];
      }
    }
    return allow;
  }, []);

  //Field Validation
  const handleFieldValidation = useCallback(
    (e) => {
      const { value } = e.target;
      let errorData = "";
    let  countError =''
      if (value.length) {
        if (value.length < 6) {
           countError = `Remaining Characters: ${6 - value.length}`;
        } else if (handleValidation(value)) {
          errorData =
            "Password Should Contain Minimum  One Uppercase and Lowercase  and one Integer Value";
          
        } else if (handleRepeatedString(value)) {
          errorData = "Repeated values not allowed";
        
        }
      }

      setError(errorData);
      setErrorCount(countError)
    },
    [handleValidation, handleRepeatedString]
  );

//Save Password Call
const handleSavePassword = async()=>{
  await dispatch( requestPassword(value))
    setValue('')

}


//Disabled Condition
const handleDisabled = ()=>{
  if (value === '' || error.length > 0 ||errorCount.length > 0){
    return true
  }else{
    return false
  }
}

  return (
    <div className="passwordCls">
      <div className="paasContainer">
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <h4 style={{fontSize:'20px'}}>Welcome User</h4>
        </div>
        <br/>
        <div className="labelContainer">
          <label htmlFor="passwordInput">Password</label>
        </div>
        <input
          id="password"
          value={value}
          onChange={handleInput}
          onBlur={handleFieldValidation}
          placeholder="Enter Password"
        />
        <br />
        {error && (
          <span
            style={{
              color: "red",
              fontSize: "12px",
              marginRight: "5%",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            {error}
          </span>
        )}
        {errorCount && (
          <span
          style={{
            fontSize: "14px",
            marginRight: "5%",
            display: "flex",
            alignItems: "flex-start",
          }}
          >{errorCount}</span>
        )}
        
        <div style={{ display: 'flex', justifyContent: 'center',marginTop:'100%' }}>
          <button style={{
              position: "absolute",
              bottom: "10px",
              backgroundColor:handleDisabled() === true ? "red":'green',
              border: "none",
              borderRadius: "10px",
              padding: "8px 16px",
              color: "#fff",
              cursor:handleDisabled() === true? "progress":" pointer",
          }} onClick={handleSavePassword}  disabled ={handleDisabled() } >Save</button>
        </div>
      </div>
    </div>
  );
};

export default RenderInput;
