import { useState, useEffect, Fragment } from "react";
import Values from "values.js";
import componentToRGB from "./Util";
import SingleColor from "./SingleSolor";

function App() {
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const [color, setColor] = useState("#f15025");
  const { log } = console;

  const getColorHandler = () => {
    try {
      let newColor = new Values(color).all(10);
      setList(newColor);
      log(list);
      setError(false);
    } catch (error) {
      setError(true);
      log(error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    getColorHandler()
  };

  

  useEffect(()=> {
    getColorHandler();
  }, [])

  return (
    <Fragment>
      <section className="container mx-auto py-[2rem] mt-[3rem]">
        <form
          onSubmit={submitHandler}
          className="flex justify-center gap-2 items-center"
        >
          <h1 className="font-bold text-[1.1rem]">Color Generator</h1>
          <input
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            type="text"
            name="text"
            id="text"
            placeholder="#f15025"
            className={`w-[10rem] px-[1rem] py-[0.2rem] border-[1px]  outline-none transition-all ease-in-out duration-200 rounded-md ${
              error ? "border-red-500 focus:border-red-500" : "focus:border-green-500 border-green-500"
            }`}
          />
          <button
            type="submit"
            className="border-[1px] px-[1rem] py-[0.2rem] rounded-md bg-green-500 text-white"
          >
            Submit
          </button>
        </form>
      </section>
      <section className="grid grid-cols-6 px-[9rem] mt-[5rem]">
        {
          list.map((items, index)=> {
            return <SingleColor key={index} items={items} index={index}/>
          })
        }
      </section>
    </Fragment>
  );
}

export default App;
