import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaBook } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import styles from "./AskForVoluntary.module.css"

const AskForVoluntary = () => {
   const { t } = useTranslation()
   return (
      <section className={`${styles["ask-for-voulenteer"]}`}>
         <HeaderTitle title={t("تطوع معنا")} para={t("كن مصدراً لرسم الابتسامة على وجوه الآخرين")} price='' />
         <div className={`${styles["ask-for-voulenteer__info"]}`} >
            <div className='container'>
               <div className={`${styles["ask-for-voulenteer__info_contant"]} mt-5`}>
                  <h4>{t("مقدمة")}</h4>
                  <p>{t("عندما نلمس الجانب الطيب في نفوس الناس، نجد أن هناك خيرًا كثيرًا قد لا تراه العيون أول وهلة ، فإن الإنسان مهما طغى وتجبّر فإنّه ينطوي على بذرة خير مهيّأة للإنبات .")}</p>
                  <p>{t("نؤمن ب هذه حياتي بأهمية العمل التطوعي و الخدمة المجتمعية ، لذا سعينا منذ بداياتنا لنشر ثقافة التطوع بإتاحة الفرصة المبادر المؤمن بالتغيير و دوره الفعال لخدمة المجتمع و أهلنا في سوريا ليكونوا جزءاً منا وانبثق عنا العديد من الأفرقة التطوعية التي نفخر بعملها .")}</p>
                  <p>{t("ك قنديلٍ من الأمان لمن حولك")}</p>
                  <p>{t("أباً ليتيم … عكازا لعجوز … سنداً لمحتاج .. وركيزة قوية لبناء الوطن")}</p>
                  <p>{t("تزهر حيثما كُتب لك أن تكون ..")}</p>
                  <p>{t("وتعطي دون توقف …")}</p>
               </div>
               <div className={`${styles["ask-for-voulenteer__info_contant"]} mt-4`}>
                  <h4>{t("تعاريف")}</h4>

                  <p> <span>{t(" العمل التطوعي : ")}</span>{t("أي نشاط اختياري يتضمن قضاء وقت محدد بدون أجر للقيام بمهام معّينة تهدف إلى إضافة قيمة اجتماعية لطرف آخر.")}</p>
                  <p> <span> {t("المتطوع :")} </span> {t("الشخص الراغب بتقديم جهد وعمل معّين مع جهة ما بدون مقابل وبدون إكراه.")}</p>

               </div>
               <div className={`${styles["ask-for-voulenteer__info_contant"]} mt-4`}>
                  <h4>أنواع التطوع</h4>

                  <p> <span> تطوع دائم: </span> أن يكون المتطوع عاملاً بشكل مستمر.</p>
                  <p> <span> تطوع مؤقت: </span> وهو أن يكون التطوع إما: لفترة زمنية محددة أو لفترات زمنية متقطعة حسب الحاجة لنشاط محدد ومعين فقط أو لجملة فعاليات محددة.</p>

               </div>
               <div className={`${styles["ask-for-voulenteer__info_contant"]} mt-4`}>
                  <h4>حقوق المتطوع</h4>

                  <p className='mb-auto'> – التعامل معه باحترام وثقة وشفافية .</p>
                  <p className='mb-auto'> – اطّلاعه بطريقة مهنية وواضحة على مناخ المؤسسة وتنظيماتها والمعلومات الضرورية للقيام بمهامه.</p>
                  <p className='mb-auto'>– مساعدته على إبراز قدراته ومواهبه.</p>
                  <p className='mb-auto'>– إدماجه في العمل، والعمل على توظيف طاقاته وقدراته للاستفادة منها بأكبر قدر.</p>
                  <p className='mb-auto'>– تقديم التوجيه والتدريب للمتطوع ليتمكن من القيام بالمهام المنوطة به بكفاءة وفاعلية.</p>
               </div>
               <div className={`${styles["ask-for-voulenteer__info_contant"]} mt-4`}>
                  <h4> واجبات المتطوع</h4>

                  <p className='mb-auto'>– أداء واجبات عمله ومهامه الموكلة إليه بنشاط متوخياً الأمانة والنزاهة والدقة والمهنية والتجرد وبأقصى إمكانياته.</p>
                  <p className='mb-auto'> – الحرص على الإلمام بالقوانين والأنظمة النافذة وتطبيقها دون أي تجاوز أو مخالفة أو إهمال.</p>
                  <p className='mb-auto'>– تكريس أوقات الدوام الرسمي للقيام بمهام عمله، وعدم القيام بأي نشاط لا يتعلق بمهامه المهنية.</p>
                  <p className='mb-auto'>– السعي الدائم لتحسين أدائه وتطوير قدراته المهنية والاطلاع على آخر المستجدات في إجمالي عمله.</p>
                  <p className='mb-auto'>– تقديم المقترحات التي من شأنها تحسين أساليب العمل ورفع مستوى الأداء المهني، والمساعدة في توفير بيئة عمل آمنة وصحية.</p>
                  <p className='mb-auto'>– الامتناع عن أي تصرفات أو ممارسات أو أعمال تنتهك الآداب والسلوك الأخلاقي، والامتناع عن الإساءة إلى المعتقدات الدينية للآخرين داخل أو خارج دائرته أو التحريض ضدها.</p>
               </div>
               <div className={`${styles["ask-for-voulenteer__info_contant"]} mt-4`}>
                  <h4> شروط التطوع</h4>

                  <p className='mb-auto'>– أن يكون المتطوع حسن السيرة و السلوك و ألا يكون صدر بحقه أي حكم ولا يكون مطالبا بالمثول أمام أي محكمة .</p>
                  <p className='mb-auto'> – أن يلتزم المتطوع برسالة وأهداف المجموعة الموضحة في النظام الداخلي ويسعى لتنفيذها بـ إحسان .</p>
                  <p className='mb-auto'>– الإيمان بالعمل التطوعي وتقديم القيمة المضافة للمجموعة من خلالهُ.</p>
                  <p className='mb-auto'>– الاستعداد لتنمية مهاراته و تطويرها بما يخدم العمل </p>
                  <p className='mb-auto'>– الالتزام ب تأدية المهام المكلف بها .</p>
                  <p className='mb-auto'>– الالتزام بمدونة السلوك المهني.</p>
               </div>
               <div className={`${styles["ask-for-voulenteer__info_contant"]} mt-3 mb-5`}>
                  <p className={`${styles["text-decore"]}`}>تقوم المجموعة بطرح فرص تطوعية في الأردن و الداخل السوري ، تبعاً للبرامج المنفذة وفق الاحتياج ، بإمكانكم متابعتنا عبر الموقع و صفحات التواصل الاجتماعي وتعبئة الاستبيان المرفق .</p>
                  <h4 className={`${styles["ask-for-voulenteer__info_strong"]} mt-2 mb-5`}>نرحب بكل من يشارك و يساعد و يبتسم 😊</h4>
                  <Link className={`${styles["ask-for-voulenteer__link"]} `} to="/volunteerForm">تقديم طلب تطوع </Link>
               </div>

            </div>
         </div>
      </section>
   )
}

export default AskForVoluntary