import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import Swal, { type SweetAlertIcon, type SweetAlertOptions } from "sweetalert2";

interface IApiResponse {
  success: boolean;
}

const ContactFormSection = () => {
  const [submitMsg, setSubmitMsg] = useState<boolean>(false);

  const customNotifyObj: SweetAlertOptions = {
    customClass: {
      title: "font-quicksand font-medium text-[22px]",
      confirmButton:
        "bg-dark-gray text-smoke-white p-[12px] rounded-md font-quicksand font-medium cursor-pointer",
    },
    buttonsStyling: false,
  };

  const notificationModal = (title: string, icon: SweetAlertIcon) => {
    Swal.fire({
      title: title,
      icon: icon,
      ...customNotifyObj,
    });
  };

  const formClass: string =
    "w-full bg-light-gray/30 p-[14px] md:p-[16px] text-dark-gray text-[20px] md:text-[22px] font-quicksand font-medium focus:outline-none rounded-md placeholder:text-light-gray placeholder:font-quicksand";

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formField = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "3c2f365f-37f0-4400-bd55-1ae0cdceccf3");

    try {
      setSubmitMsg(true);
      const apiResponse: Response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        },
      );

      const responseData: IApiResponse = await apiResponse.json();
      if (responseData.success) {
        notificationModal("Message Sent Successfully!", "success");
        formField.reset();
      } else {
        notificationModal("Error Sending Message!", "error");
      }
    } catch (error) {
      notificationModal("Network Error! Please Try Again!", "error");
    } finally {
      setSubmitMsg(false);
    }
  };

  const contactContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl: gsap.core.Timeline = gsap.timeline({
        defaults: { opacity: 0, duration: 0.8, ease: "power2.inOut" },
        scrollTrigger: {
          trigger: contactContainerRef.current,
          start: "top 85%",
          toggleActions: "play none none reset",
        },
      });

      tl.from(".left-content", {
        x: -50,
      }).from(
        ".right-content",
        {
          x: 50,
        },
        "<",
      );
    },
    { scope: contactContainerRef },
  );

  return (
    <section ref={contactContainerRef} className="custom-container py-[50px] md:py-[100px] flex flex-col xl:flex-row justify-evenly gap-[16px] md:gap-[20px] xl:gap-0">
      <figure className="left-content">
        <iframe
          title="CognitDev Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98239.9605093902!2d90.38030546314802!3d23.787843432641598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1770919725501!5m2!1sen!2sbd"
          width="600"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-md w-full xl:w-[600px] h-[400px] xl:h-full"
        />
      </figure>

      <form
        className="right-content flex flex-col gap-[16px] md:gap-[20px]"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col md:flex-row gap-[16px] md:gap-[20px]">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={formClass}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Mail"
            className={formClass}
            required
          />
        </div>
        <div>
          <textarea
            rows={8}
            placeholder="Message"
            name="message"
            className={`${formClass} resize-none custom-scrollbar`}
            required
          />
        </div>

        <button
          type="submit"
          disabled={submitMsg}
          className="rounded-md p-[10px] md:p-[12px] font-quicksand text-[20px] md:text-[22px] text-smoke-white bg-dark-gray font-medium cursor-pointer active:scale-98 hover:bg-medium-gray"
        >
          {submitMsg ? "Submitting..." : "Submit"}
        </button>
      </form>
    </section>
  );
};

export default ContactFormSection;
