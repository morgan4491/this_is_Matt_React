import myWork from "../data";

function Project() {
    return (
        <>
            <h3 className="text-center work-name">My Work</h3>

            <section id="work" className="work-output">
                {myWork.map((workObj, index) => (
                    <article key={index} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url(${workObj.backgroundImage})` }}>
                        <h5>{workObj.title}</h5>
                        <p>{workObj.description}</p>
                        <a href={workObj.gitUrl}><i className="fa-brands fa-github"></i></a>
                        {workObj.appUrl ? (
                        <a href={workObj.appUrl}><i className="fa-solid fa-link"></i></a>
                        ) : (
                            <p>This is not a deployed application</p>
                        )}
                    </article>
                ))}
            </section>
        </>
    )
}

export default Project;