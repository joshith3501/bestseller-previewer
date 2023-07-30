import { ChangeEvent, FormEvent } from "react";

interface Props {
  onSubmit : (id:number) => void;
}

const InputForm = ({onSubmit}: Props) => {

  
  let inputValue = '';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(+inputValue);
  }

  return (
      <section className="form-container" >
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="number"
            onChange = {(e: ChangeEvent<HTMLInputElement>) => inputValue = e.target.value}
            className="form-input"
          />
          <button type="submit" className="form-submit">
            Submit
          </button>
        </form>
      </section> 
  )
}

export default InputForm