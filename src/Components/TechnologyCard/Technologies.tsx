import { use } from "react";

const Technologies = ({technologyPromise}) => {
    const technologiesd = use(technologyPromise);
    console.log(technologiesd)
    return (
        <div>
            <h2>some</h2>
        </div>
    );
};

export default Technologies;