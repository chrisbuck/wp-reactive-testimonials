const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { BlockControls, Component } = wp.element;
const { RichText, InnerBlocks } = wp.blockEditor;
const { withSelect } = wp.data;

import PlusLogoSolid from './PlusLogoSolid.jsx';
import Testimonials from './Testimonials.jsx';

const getPosts = ( select ) => {
    
}

const LeftCol = () => {
    
}

let smallSvgStyle = {
    maxHeight: '25px'
};
const RTField = ({tagName, elemClass, defVal}) => {
    return (
        <RichText tagName={tagName} className={elemClass} value={defVal} formattingControls={['bold', 'italic', 'link']} onChange={function(e){console.log(e)}} placeholder={'Test Richtext'} />
    );
}

const NoneMessage = ({testimonials}) => {
    var message = "";
    if( testimonials.length === 0 ){
        return(
            <div className="testimonials-none-message">
                You don't have any testimonials. Please add one.
            </div>
        )
    } else {
        return(<div></div> );
    }
}

const TestimonialsList = (testimonials, onaddclick) =>{
    const contentTemplate = [['core/paragraph', {placeholder: 'Review/testimonial'}]];
    return(
            testimonials.map(
            ( testimonial, i ) => {
                <div className="testimonials-inputrow" key={i}>
                    <div className="testimonials-leftcol">
                        <label><span>Title: </span></label>
                    </div>
                    <div className="testimonials-rightcol">
                        <RTField tagName={'h3'} elemClass={'testimonial-rt-title'} defVal={testimonial.title} />
                    </div>
                    <div className="testimonials-leftcol">
                        <label><span>Content: </span></label>
                    </div>
                    <div className="testimonials-rightcol">
                        <InnerBlocks template={contentTemplate} />
                    </div>
                    <div className="testimonials-leftcol">
                    <label><span>Attribution: </span></label>
                    </div>
                    <div className="testimonials-rightcol">
                        <RTField tagName={'h3'} elemClass={'testimonial-rt-attribution'} defVal={''} />
                    </div>
                </div>
            }

         )

        
            
                
        
    );
}

let noneStyle = {
    display: 'none',
};
wp.blocks.unregisterBlockType('cst/reactive-testimonials');
registerBlockType('cst/reactive-testimonials', {
   title: __('Reactive Testimonials'),
    icon: 'list-view',
    category: 'cstech',
    attributes: {
        title: { type: 'string', source: 'text', default: 'Testimonials', selector: '#cst-reactive-testimonials .wrapper-title' },
        moreLink: { type: 'string', default: '/testimonials' },
        testimonials: { type: 'array', default: [{title: '', content: '', attribution: ''}], source: 'query', selector: '#cst-reactive-testimonials #testimonials-list-wrapper .testimonial-slide', query: {
            title: {
                source: 'text',
                selector: '.title-wrapper'
            },
            content: {
                source: 'text',
                selector: '.testimonial-content'
            },
            attribution: {
                source: 'text',
                selector: '.attribution-wrapper .attribution'
            }
        }},
        
        editorListCode: { type: 'object' },
        outputCode: { type: 'object' },
    },
    
    edit: class extends Component{
        constructor( props ){
            super(props);
            this.props = props;
            this.state = {
                testimonials: this.props.attributes.testimonials
            };
            
            this.onEditMainTitle = this.onEditMainTitle.bind(this);
            this.onEditTitle = this.onEditTitle.bind(this);
            this.onEditContent = this.onEditContent.bind(this);
            this.onEditAttribution = this.onEditAttribution.bind(this);
            
            this.onAddClick = this.onAddClick.bind(this);
            this.getListOutput = this.getListOutput.bind(this);
            this.getList = this.getList.bind(this);
            
            this.setOutputCode = this.setOutputCode.bind(this);
            this.setContentOutput = this.setContentOutput.bind(this);
        }
        onEditMainTitle(e){
            var target = e.target;
            var val = target.value;
            this.props.setAttributes({title: val});
            this.setOutputCode();
        }
        onEditTitle(e){
            var target = e.target;
            var val = target.value;
            var ds = target.dataset;
            var ind = ds['index'];
                ind = parseInt(ind);
            var tests = this.props.attributes.testimonials;
            
            var targetTest = tests[ind];
            
            targetTest.title = val;
            
            tests[ind] = targetTest;
            
            this.props.setAttributes({testimonials: tests});
            
            this.setOutputCode();
        }
        onEditContent(e){
            var target = e.target;
            var val = target.value;
            var ds = target.dataset;
            var ind = ds['index'];
                ind = parseInt(ind);
            var tests = this.props.attributes.testimonials;
            var targetTest = tests[ind];
            
            targetTest.content = val;
            
            tests[ind] = targetTest;
            
            this.props.setAttributes({testimonials: tests});
            
            this.setOutputCode();
        }
        onEditAttribution(e){
            var target = e.target;
            var val = target.value;
            var ds = target.dataset;
            var ind = ds['index'];
            
            var tests = this.props.attributes.testimonials;
            
            var targetTest = tests[ind];
            
            targetTest.attribution = val;
            
            tests[ind] = targetTest;
            
            this.props.setAttributes({testimonials: tests});
            
            this.setOutputCode();
        }
        onEditMoreLink(e){
            var target = e.target;
            var val = target.value;
            
            
            this.props.setAttributes({moreLink: val});
            
            this.setOutputCode();
        }
        onAddClick(e){
            e.preventDefault();
            var tests = this.state.testimonials;
            tests.push({title: '', content: '', attribution: ''});
            console.log(tests);
            this.setState({testimonials: tests});
        }
        
        getList(tests){
            return(
                tests.map(
                (test, i) => {
                    return(
                        <fragment>
                            <label><span>Title:</span></label>
                            <input type="text" defaultValue={test.title}></input>
                            <label><span>Content:</span></label>
                            <textarea type="text" defaultValue={test.content}></textarea>
                            <label><span>Attribution:</span></label>
                            <input type="text" defaultValue={test.attribution} ></input>
                        </fragment>
                    )
                }
                )
            )
        }
        getListOutput(){
            const maintitle = this.props.attributes.title;
            const tests = this.state.testimonials;
            const addClick = this.onAddClick;
            const morelink = this.props.attributes.moreLink;
            return(
                <div id="testimonials-editor">
                    <div id="mainTitleWrapper">
                        <label><span>Main Title:</span><input id="mainTitle" type="text" defaultValue={maintitle} onBlur={this.onEditMainTitle}></input>
                        </label>
                    </div>
                    <div id="readLinkWrapper">
                        <label><span>Read More Link:</span><input id="readLink" type="text" defaultValue={morelink} onBlur={this.onEditMoreLink}></input>
                        </label>
                    </div>
                    {tests.map(
                        (test, i) =>(
                            <div className="testimonials-list-item" key={i}>
                                <div className="testimonials-item-title" data-index={i}>
                                    <div className="leftcol"><label><span>Title:</span></label></div>
                                    <div className="rightcol"><span></span><input type="text" defaultValue={test.title} onBlur={this.onEditTitle} data-index={i}></input></div>
                                </div>
                                <div className="testimonials-item-content" data-index={i}>
                                    <div className="leftcol"><label><span>Content:</span></label></div>
                                    <div className="rightcol"><span></span><textarea defaultValue={test.content} onBlur={this.onEditContent} placeholder="Testimonial goes here..." data-index={i}></textarea></div>
                                </div>
                                <div className="testimonials-item-attribution" data-index={i}>
                                    <div className="leftcol"><label><span>Attribution:</span></label></div>
                                    <div className="rightcol"><span></span><input type="text" defaultValue={test.attribution} onBlur={this.onEditAttribution} data-index={i}></input></div>
                                </div>
                                
                            </div>
                        )
                    )}
                    <div id="addMoreWrapper">
                        <a href="#" onClick={addClick}><PlusLogoSolid style={smallSvgStyle} /></a>
                    </div>
                </div>
                
            );
        }
        
        setOutputCode(){
            var outputCode = this.setContentOutput();
            this.props.setAttributes({outputCode: outputCode});
        }
        
        setContentOutput(){
            var maintitle = this.props.attributes.title;
            var tests = this.props.attributes.testimonials;
            var morelink = this.props.attributes.moreLink;
            return(
                <div id="cst-reactive-testimonials">
                    <div id="testimonials-carousel" className="carousel slide" data-ride="carousel">
                        <div id="testimonials-title-wrapper">
                            <h2 className="wrapper-title">{maintitle}</h2>
                        </div>
                        <div id="testimonials-list-wrapper" className="carousel-inner">
                            {tests.map(
                                (test, i) => (
                                    <div className="testimonial-slide carousel-item animated fadeInRight duration-2s delay-1s">
                                        <div className="title-wrapper">
                                            {test.title}
                                        </div>
                                        <div className="testimonial-content">
                                            {test.content}
                                        </div>
                                        <div className="attribution-wrapper">
                                            <div className="attribution">
                                                {test.attribution}
                                            </div>
                                        </div>
                                        <div className="readmore-wrapper animated fadeIn duration-2s delay-1s">
                                            <a className="readmore-button" href={morelink}>Read More</a>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            );
        }
        
        render(){
            const listout = this.getListOutput();

            return(
                
                listout
            )
        }
    },
    save( props ){
        const outputcode = props.attributes.outputCode;
        return(
            outputcode
        );
    }
});