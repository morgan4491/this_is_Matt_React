import myWork from "../data";

function Project() {
    return (
        <>
            <h4 className="text-center">My Work</h4>

            <section id="work" className="work-output">
                {myWork.map((workObj, index) => (
                    <article key={index} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url(${workObj.backgroundImage})` }}>
                        <h5>{workObj.title}</h5>
                        <p>{workObj.description}</p>
                    </article>
                ))}
            </section>
        </>
    )
}

export default Project;