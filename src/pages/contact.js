import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ClipLoader from "react-spinners/ClipLoader";

import ContactImage from "../assets/images/svg/contact.svg";
import Switcher from "../component/Switcher";
import { Hexagon } from "react-feather";
import { BsTelephone, MdMailOutline, FiMapPin } from "../assets/icons/vander";
import { useFormik } from "formik";
import { httpInstance } from "../constants/httpinstances";
import { ConfettiCompo } from "../component/Confetti";
import ErrorComponent from "./Error";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("First Name is required "),
  message: Yup.string().required("Please , Enter you Message "),
  subject: Yup.string().required("Please , Select your Subject"),
  mono: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid Mobile number")
    .required("Customer Mobile Number is required"),

  email: Yup.string().email("Invalid email address"),
});

const initialValues = {
  name: "",
  email: "",
  message: "",
  mono: "",
  subject: "Booking in Project",
};

export default function Contact() {
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const addData = async (values) => {
    const { name, email, mono, subject, message } = values;

    const payload = {
      name: name,
      email: email,
      number: mono,
      message: message,
      subject: subject,
    };

    setLoading(true);
    try {
      const res = await httpInstance.post("website/contact-us", payload);
      console.log(res, "response");

      if (res.status === 200) {
        setLoading(false);
        setShowAlert(true);
      }

      setTimeout(() => {
        setShowAlert(false);
      }, 10000);
    } catch (err) {
      setTimeout(() => {
        setError(false);
      }, 10000);
      setError(true);
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);

      addData(values);
      setTimeout(() => {
        resetForm();
      }, 5000);
    },
  });

  const handleChange = (e) => {
    // console.log(e.target.value);

    formik.setFieldValue("subject", e.target.value);
  };

  return (
    <>
      <Navbar />
      {/* <!-- Google Map --> */}
      <div className="container-fluid relative mt-20">
        <div className="grid grid-cols-1">
          <div className="w-full leading-[0] border-0">
            <iframe
              title="contact-iframe"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1861.344403133706!2d72.8815263038244!3d21.085087803857522!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb8d717b767ac8626!2sSVM%20Builders%20%26%20Developers!5e0!3m2!1sen!2sin!4v1574244181139!5m2!1sen!2sin"
              style={{ border: "0" }}
              className="w-full h-[500px]"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      {/* <!-- Google Map --> */}

      {/* <!-- Start Section--> */}
      <section className="relative lg:py-24 py-16">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-7 md:col-span-6">
              <img src={ContactImage} alt="" />
            </div>

            <div className="lg:col-span-5 md:col-span-6">
              <div className="lg:me-5 relative">
                {showAlert && <ConfettiCompo />}
                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
                  <h3 className="mb-6 text-2xl leading-normal font-medium">
                    Get in touch !
                  </h3>

                  {showAlert && (
                    <div
                      className=" mb-3 bg-white dark:bg-slate-900  w-full rounded-lg px-6 py-5 text-base leading-normal font-medium text-success-700"
                      style={{
                        // background: "#bbf7d0",
                        padding: "10px",
                        display: "flex ",
                        alignItems: "start !important",
                      }}
                      role="alert"
                    >
                      <span class="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="h-5 w-5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      Thank you for reaching out, we will get back to you soon
                      🙂🙂.
                    </div>
                  )}
                  {error && <ErrorComponent />}

                  <div className="grid lg:grid-cols-12 lg:gap-6">
                    <div className="lg:col-span-6 mb-5">
                      <label htmlFor="name" className="font-medium">
                        Your Name:
                      </label>
                      <input
                        name="name"
                        id="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        type="text"
                        className="form-input mt-2"
                        placeholder="Name :"
                      />

                      {formik.touched.name && formik.errors.name && (
                        <div className="text-red-600">{formik.errors.name}</div>
                      )}
                    </div>

                    <div className="lg:col-span-6 mb-5">
                      <label htmlFor="email" className="font-medium">
                        Your Email:
                      </label>
                      <input
                        name="email"
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        type="email"
                        className="form-input mt-2"
                        placeholder="Email :"
                      />

                      {formik.touched.email && formik.errors.email && (
                        <div className="text-red-600">
                          {formik.errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1">
                    <div className="mb-5">
                      <label htmlFor="mono" className="font-medium">
                        Mobile No:
                      </label>
                      <input
                        name="mono"
                        id="mono"
                        value={formik.values.mono}
                        onChange={formik.handleChange}
                        className="form-input mt-2"
                        placeholder="Mobile No :"
                      />
                      {formik.touched.mono && formik.errors.mono && (
                        <div className="text-red-600">{formik.errors.mono}</div>
                      )}
                    </div>
                    {/* <div className="mb-5">
                      <label htmlFor="subject" className="font-medium">
                        Subject:
                      </label>
                      <input
                        name="subject"
                        id="subject"
                        value={formik.values.subject}
                        onChange={formik.handleChange}
                        className="form-input mt-2"
                        placeholder="Subject :"
                      />
                    </div> */}
                    <div className="mb-5 flex flex-col">
                      <label className="font-medium" htmlFor="countries">
                        What we can help you with ?
                      </label>
                      <select
                        className="form-select form-input"
                        id="countries"
                        onChange={handleChange}
                      >
                        <option selected className="py-2">
                          Booking in Project
                        </option>
                        <option value="land proposal" className="py-2">
                          Land Proposal
                        </option>
                        <option value="svm vendor">Become a SVM Vendor</option>
                      </select>

                      {formik.touched.subject && formik.errors.subject && (
                        <div className="text-red-600">
                          {formik.errors.subject}
                        </div>
                      )}
                    </div>

                    <div className="mb-5">
                      <label htmlFor="message" className="font-medium">
                        Your Message:
                      </label>
                      <textarea
                        name="message"
                        // id="message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        className="form-input mt-2 textarea"
                        placeholder="Message :"
                      ></textarea>

                      {formik.touched.message && formik.errors.message && (
                        <div className="text-red-600">
                          {formik.errors.message}
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    // type="submit"
                    // id="submit"
                    // name="send"
                    onClick={formik.handleSubmit}
                    className="btn bg-green-600 hover:bg-green-700 text-white rounded-md"
                  >
                    Send Message
                    {loading && <ClipLoader color="#fff" size={25} />}
                  </button>

                  {/* </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container lg:mt-24 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
            <div className="text-center px-6">
              <div className="relative overflow-hidden text-transparent -m-3">
                <Hexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <BsTelephone className="text-3xl" />
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="title h5 text-xl font-medium">Phone</h5>
                {/* <p className="text-slate-400 mt-3">
                  The phrasal sequence of the is now so that many campaign and
                  benefit
                </p> */}

                <div className="mt-5">
                  <a
                    href="tel:+91-9662320636"
                    className="btn btn-link text-slate-400 hover:text-slate-400 after:bg-green-600 transition duration-500"
                  >
                    +91-9662320636
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center px-6">
              <div className="relative overflow-hidden text-transparent -m-3">
                <Hexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <MdMailOutline className="text-3xl" />
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="title h5 text-xl font-medium">Email</h5>
                {/* <p className="text-slate-400 mt-3">
                  The phrasal sequence of the is now so that many campaign and
                  benefit
                </p> */}

                <div className="mt-5">
                  <a
                    href="mailto:svmbuildersanddevelopers0326@gmail.com"
                    className="btn btn-link text-slate-400 hover:text-slate-400 after:bg-green-600 transition duration-500"
                  >
                    svmbuildersanddevelopers0326@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center px-6">
              <div className="relative overflow-hidden text-transparent -m-3">
                <Hexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <FiMapPin className="text-3xl" />
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="title h5 text-xl font-medium">Location</h5>
                <p className="text-slate-400 mt-3">
                  F-27, Sidhi Vinayak Residency, Near yes bank, Station road,
                  Sachin,Surat, <br />
                  Pin – 394230{" "}
                </p>

                {/* <div className="mt-5">
                  <a
                    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                    data-type="iframe"
                    className="video-play-icon read-more lightbox btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500"
                  >
                    View on Google map
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Section--> */}

      <Footer />
      <Switcher />
    </>
  );
}
