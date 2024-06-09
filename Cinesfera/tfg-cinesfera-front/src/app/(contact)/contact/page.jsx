import style from '../../../assets/styles/Contact/Contact.module.css'
import Button from '@/components/Buttons'

export default function Contact() {
    return (
        <div className={style.div}>
            <div className={style.hero}></div>
            
                <div className={style.container}>
                    <div className={style.text}>
                        <h1 className={style.titleContact}>Contact us!</h1>
                        <p className={style.paragraph}>Thank you for visiting our website! We value your feedback, questions, and inquiries. Please feel free to reach out to us using the form below or through the contact details provided.</p>
                        <p className={style.paragraph}>Whether you have a question about our services, need assistance, or just want to share your thoughts, we're here to help. We aim to respond to all messages within 24 hours.</p>
                    </div>
                </div>
                <div className={style.container}>
                    <form className={style.form}>
                        <h1 className={style.title}>Contact us</h1>
                        <p className={style.containerLabel}>
                            <label className={style.label} htmlFor="">Name and surname</label>
                            <input className={style.input}
                                type="" />
                        </p>
                        <p className={style.containerLabel}>
                            <label className={style.label} htmlFor="">Email</label>
                            <input className={style.input}
                                type="email" />
                        </p>
                        <p className={style.containerLabel}>
                            <label className={style.label} htmlFor="">Phone</label>
                            <input className={style.input}
                                type="phone" />
                        </p>
                        <p className={style.containerLabel}>
                            <label className={style.label} htmlFor="">Message</label>
                            <textarea rows={5} className={style.input}
                                type="" />
                        </p>
                        <Button
                            type={'submit'}
                            label={'Send'}
                            styleType='formButton'
                            isLoading={null} />
                    </form>
                </div>
          
            <div className={style.containerMap}>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1GxoE7VkkEWu9WGPdvC3t3DByDIU3EfE&ehbc=2E312F&noprof=1" width="100%" height="480"></iframe>
            </div>
        </div>
    )
}