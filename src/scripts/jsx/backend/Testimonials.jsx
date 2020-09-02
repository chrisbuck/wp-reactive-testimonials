const Testimonial = ({testinst}) => {
    <div className="testimonial-slide">
        <div className="title-wrapper">
            <h3 className="testimonial-title">{testinst.title}</h3>
        </div>
        <div className="testimonial-content">
            {testinst.content}
        </div>
        <div className="attribution-wrapper">
            <div className="attribution">
                {testinst.attribution}
            </div>
        </div>
    </div>
}

const Testimonials = ({testimonials}) => {
    return(
        <div id="cst-reactive-testimonials">
            <h2 className="wrapper-title">Saved Title</h2>
                {testimonials.map(
                    (testimonial, i) => {
                        <Testimonial content={testimonial} key={i} />
                    }
                )}    
        </div>
    );
};

module.exports = Testimonials;