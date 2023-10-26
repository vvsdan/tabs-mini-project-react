import { useEffect, useState } from "react";
import BtnContainer from "./BtnContainer";
import JobInfo from "./JobInfo";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(1);

  const fetchJobs = async () => {
    const response = await fetch(url); //create promise to retrieve data from api
    const newJobs = await response.json(); //store response in newJobs in json format
    setJobs(newJobs); // update state for jobs to "fill" the array with json object from api
    setIsLoading(false); //setIsLoading set to false because no longer loading data from api
  };

  useEffect(() => {
    fetchJobs(); // use effect to actually fetch the jobs, ONCE
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      {/*button container*/}
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      {/*job info*/}
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};

export default App;
