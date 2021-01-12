import React from 'react';
import Badge from 'react-bootstrap/Badge';
import marked from 'marked'

const defaultText= `
# Welcome to the Markdown Previewer!

 ## The markdown 

 ### you type to this box will be previewed in the box to the right. 

 For instance 
 you can make a text **bold** or _italic_ or **_Both!_**

 you can also write code like \`<div></div>\` by putting it between ticks
 
 using three ticks like a wrapper will also allow you to type multi-line code:
 \`\`\`
 function add(x,y)=>{
   return x+y;
 }
 \`\`\`

 You can also use [Links](http://bigpara.hurriyet.com.tr/), and
 > Block Quotes!

 Tables can also be displayer like:

 DOLLAR  | EURO| TL
 ------------ | ------------- | ------------- 
 SELL| SELL | BUY
 GO DOWN|GO DOWN|GO UP

 - And of course there are lists.
 - Some are bulleted.
    - With different indentation levels.
       - That look like this.

  1. You can also make numbererd lists too.
  - you can use dashes or asterisks.

  Finally embedded image can also be placed:

  ![Galatasaray](https://ih1.redbubble.net/image.435981201.7737/flat,128x128,075,t.u2.jpg)





 `
 
 


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      markdown:defaultText,
    };
  }

  updateMarkdown(markdown){
    this.setState({markdown});
  }

  


  render(){
    let inputStyle ={
      width: '400px',
      height: '100vh',
      marginLeft: 'auto',
      backgroundColor:'rgb(160, 227, 227)',
      marginRight: 'auto',
     
    }

    let outputStyle ={
      width: '400px',
      height: '100vh',
      backgroundColor:'rgb(228, 179, 161)',
      marginLeft:'auto',
      marginRight:'auto',
      padding:'10px'
    }




  return(
    <div className="App">
      <div className='container'>
      <div className="col text-center">
      <h1>
        <Badge className='text-align-center' variant='light'>
          Markdown Previewer
        </Badge>
      </h1>
    </div>
    </div>
    <div className='row mt-4'>
      <div  className='col-md-6'>
        
        <div className='col text-center'>
        <h2  className='text-align-center'>Markdown Input</h2>
        
        <div className='markdown-input' style={inputStyle}>
      
      <textarea 
      id='editor'
       className='input'
       style={inputStyle} 
       value={this.state.markdown}
       onChange={(x)=>{
         this.updateMarkdown(x.target.value);}}>
           
        </textarea>
       
    </div>
      </div>
      </div>

      <div className='col-md-6'>
        {" "}
        <div className='col text-center'>
        
        <h2  className='text-align-center'>Preview</h2>
        
    </div>
  
    <div
                id='preview'
                style={outputStyle}
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
              ></div>
      </div>
     


      </div>
      
   

    </div>
  );}
}

export default App;
