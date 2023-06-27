import React from "react";
import { Button, Form, Input, Modal, Radio } from "antd";
import { useState } from "react";
import { FaPhoneAlt} from "react-icons/fa";
import {MdOutlineMailOutline} from 'react-icons/md'
import {ImLocation} from 'react-icons/im'


const CollectionCreateForm = ({ open, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input the title of collection!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item
          name="modifier"
          className="collection-create-form_last-form-item"
        >
          <Radio.Group>
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};
const Contact = () => {
  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };

  return (
    <div>
      <div className="h-full">
        <div className="flex flex-wrap pt-36">
          <div className="w-full sm:w-1/3 p-10">
            <h1 className="text-5xl font-bold text-center md:text-left min-[320px]:text-center max-[600px]:text-lg">
              Contact Us
            </h1>
            <br />
            <p className="text-lg min-[1024px]:text-lg max-[600px]:text-sm">
            
            <div class="flex items-center  min-[320px]:text-sm max-[600px]:text-lg">
            <FaPhoneAlt className="text-lg m-2 text-white hover:underline" />
            <a
              href="tel:9916138314"
              class="mr-6 text-lg text-white hover:underline  min-[320px]:text-sm max-[600px]:text-lg"
            >
              +91 9916138314
            </a>
          </div>
          <div class="flex items-center  min-[320px]:text-sm max-[600px]:text-lg">
            <MdOutlineMailOutline className="text-lg m-2 text-white hover:underline" />
            <a
              href="mailto:manjukarnalli.2008@gmail.com"
              class="mr-6 text-lg text-white hover:underline  min-[320px]:text-sm max-[600px]:text-lg"
            >
              manjukarnalli.2008@gmail.com
            </a>
          </div>
          <div class="flex items-center">
            <ImLocation className="text-lg m-2 text-white hover:underline" />
            <a 
              href="mailto:manjukarnalli.2008@gmail.com"
              class="mr-6 text-lg text-white hover:underline  min-[320px]:text-sm max-[600px]:text-lg"
            >
              Sadashivnagar Badavane , Nekar nagar Road , old hubli.
            </a>
          </div>
          <br/>
              <div>
              <button class="button-36"
                  onClick={() => {
                    setOpen(true);
                  }} role="button">Send Message</button>
                <CollectionCreateForm
                  open={open}
                  onCreate={onCreate}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </div>
            </p>
          </div>
          <div className="w-full sm:w-2/3 h-96 p-10 md:p-24">
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  width="100%"
                  height="100%"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Shri daneshwari Steel Works sadashivanagar badavane , nekar nagar road , old hubli &t=&z=11&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
                <a href="https://2yu.co"></a>
                <br />
                <a href="https://embedgooglemap.2yu.co/">
                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
