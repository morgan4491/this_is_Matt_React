import myWork from "../data";

function Work() {
    return (
        <>
            <h4>My Work</h4>

            <section>
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

export default Work;