import React, { Component } from 'react';

class SendingEmailToUser extends Component {
    
     

    render() {

        
        return (
         
            <div>
             <Container className=" d-flex  flex-column bd-highlight mb-3 mt-5">
             <Form
            className="mx-auto  d-flex justify-content-between w-50 p-2"
            inline
          >
            <Form.Label htmlFor="inlineFormCustomSelectPref">
              categoryName
              subCategoryName
              Details
              Phone Number
            </Form.Label>
            <Form.Control onChange={this.categoryChange} as="select" className="" id="inlineFormCustomSelectPref" value={this.state.categorySelectedId}>
              <option value="0">Select A Category</option>
              {categoryOption}
{/* 
              <Button onClick={() => handleSendEmail()} href="#/emailSending" variant="secondary">
        Send an Email
      </Button>
    ) : null; */}



              </Form.Control>
              </Form>
              </Container>
           
         

                
            </div>
        );
    }
}

export default SendingEmailToUser;