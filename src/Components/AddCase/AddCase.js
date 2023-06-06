import Cookies from 'js-cookie'
import React, { useEffect, useRef, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import styles from '../../Components/Projects/Projects.module.css'
import { ToastContainer, toast } from 'react-toastify';
import imgNull from '../../assets/images/eae946efbbf74117a65d488206a09b63.png'
import { Button } from 'react-bootstrap';
import '../../Components/Projects/Projects.css'
import plus from "./../../assets/icons/+.svg"
import minus from "./../../assets/icons/mi.svg"
import MultiImageInput from "react-multiple-image-input";
import { BsQuestionCircle } from "react-icons/bs";
import style from "./AddCase.module.css"
import axios from 'axios';
const AddCase = ({ show, setShow }) => {
  const [dataCategories, setDataCategories] = useState([]);
  const [dataType, setDataType] = useState([]);
  const handleClose = () => setShow(false);
  const currentLanguageCode = Cookies.get('i18next') || 'en'
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [formData, setFormData] = useState({
    titleAr: '',
    titleEn: '',
    img: '',
    descriptionEn: '',
    descriptionAr: '',
    totalPrice: '',
    caseTypeId: '',
    donationTypeId: '',
    statusCase: '',
    numberOfPeople: '',
    numberOfVolunteers: '',
    numberOfCartons: '',
    file: ''
  })
  const [dataFurniture, setDataFurniture] = useState([{
    nameEnItem: "",
    nameArItem: "",
    amountItem: ""
  }])

  useEffect(() => {
    axios.get(`https://otrok.invoacdmy.com/api/user/category/index?lang=${currentLanguageCode}`)
      .then(response => {
        setDataCategories(response.data.Categories)
      }
      ).catch((err) => { console.log(err) })
    axios.get(`https://otrok.invoacdmy.com/api/user/donation/donation/types?lang=${currentLanguageCode}`)
      .then(response => {
        setDataType(response.data.Donationtypes)
      }
      ).catch((err) => { console.log(err) })

  }, [currentLanguageCode])

  const addItem = () => {
    let newfield = {
      nameEnItem: "",
      nameArItem: "",
      amountItem: ""
    }

    setDataFurniture([...dataFurniture, newfield])
  }

  const deleteItem = (index) => {
    let data = [...dataFurniture];
    data.splice(index, 1)
    setDataFurniture(data)
  }

  let previewUploadFile = (e) => {
    let file = e.target.files[0];
    if (!file) {
      return;
    }
    setFormData(prevValue => {
      return {
        ...prevValue,
        file: file
      }
    })
  }
  const addFile = useRef(null)
  const addFileInput = useRef(null)
  const imageContentRef = useRef(null);
  const imageFirmRef = useRef(null);
  function handleLogo() {
    let inputFileEvent = document.querySelector(".input-file-js")
    inputFileEvent.click()
  }
  const [imageUrl, setImage] = useState([])
  const [fileImage, setFileImages] = useState()

  let previewUploadImage = (e) => {
    let files = e.target.files
    setFileImages(e.target.files)

    if (!files) {
      return;
    }

    let ImagesArray = Object.entries(e.target.files).map((e) =>
      URL.createObjectURL(e[1])
    );
    console.log(ImagesArray);
    setImage([...imageUrl, ...ImagesArray]);



    setFormData(prevValue => {
      return {
        ...prevValue,
        'img': files
      }
    })

    console.log(formData)
  }

  const onChangeHandler = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const [formError, setFormError] = useState({})
  // function errorAddCase() {
  //     let err = {}

  //     if (formData.title === '') {
  //         err.title = 'عنوان الحالة مطلوب';
  //     }
  //     if (formData.img === '') {
  //         err.img = "يرجي اختيار صوره للحالة";
  //     }
  //     if (formData.description === '') {
  //         err.description = "نبذه مختصره عن الحالة مطلوبه";
  //     }
  //     if (formData.totalPrice === '') {
  //         err.totalPrice = "المبلغ المراد تجميعه مطلوب"
  //     }
  //     if (formData.paiedAmount === '') {
  //         err.paiedAmount = "المبلغ الذي تم تجميعه مطلوب"
  //     }
  //     if (formData.caseType === '') {
  //         err.caseType = "يرجي اختيار نوع الحالة"
  //     }
  //     if (formData.donationType === '') {
  //         err.donationType = ' يرجي اختيار نوع التبرع';
  //     }
  //     setFormError({ ...err })
  // }

  const [checkedEnKind, setCheckedEnKind] = useState([]);

  function handleCheckedKind(e) {
    var updatedEnList = [...checkedEnKind];

    if (e.target.checked) {
      setFormData({ ...formData, [e.target.name]: e.target.value })
      updatedEnList = [...checkedEnKind, e.target.value];
    } else {
      updatedEnList.splice(checkedEnKind.indexOf(e.target.value), 1);
    }
    setCheckedEnKind(updatedEnList);
  };

  const [checkedEnSeasons, setCheckedEnSeasons] = useState([]);
  function handleCheckedSeasons(e) {
    var updatedEnList = [...checkedEnSeasons];

    if (e.target.checked) {
      setFormData({ ...formData, [e.target.name]: e.target.value })
      updatedEnList = [...checkedEnSeasons, e.target.value];
    } else {
      updatedEnList.splice(checkedEnSeasons.indexOf(e.target.value), 1);
    }
    setCheckedEnSeasons(updatedEnList);
    console.log(updatedEnList)
  };


  const handleFormChange = (index, event) => {
    let data = [...dataFurniture];
    data[index][event.target.name] = event.target.value;
    setDataFurniture(data);
    console.log(dataFurniture, 'items')
  }
  const addNewCase = new FormData();
  addNewCase.append("name_ar", formData.titleAr);
  addNewCase.append("name_en", formData.titleEn);
  addNewCase.append("description_ar", formData.descriptionAr);
  addNewCase.append("description_en", formData.descriptionEn);
  if (fileImage) {

    [...fileImage].forEach((item, index) => {
      addNewCase.append("images[]", item);

    })
  }
  addNewCase.append("donationtype_id", formData.donationTypeId);
  addNewCase.append("category_id", formData.caseTypeId);
  addNewCase.append("status", formData.statusCase);
  addNewCase.append("file", formData.file);
  if (formData.donationTypeId === "1") {
    addNewCase.append("initial_amount", formData.totalPrice);
  }
  if (formData.donationTypeId === "2") {
    addNewCase.append("initial_amount", formData.numberOfVolunteers);
  }
  if (formData.donationTypeId === "3") {
    addNewCase.append("initial_amount", formData.numberOfCartons);
  }
  if (formData.donationTypeId === "5") {
    dataFurniture.map((item, index) => {
      addNewCase.append(`items[${index}][name_en]`, item.nameEnItem);
      addNewCase.append(`items[${index}][name_ar]`, item.nameArItem);
      addNewCase.append(`items[${index}][amount]`, item.amountItem);
    })
  }
  if (formData.donationTypeId === "4") {
    const listKindAr = []
    const listKindEn = []
    const listSeasonsAr = []
    const listSeasonsEn = []
    checkedEnKind.map((item, index) => {


      if (item === 'men') {
        if (!listKindEn.includes('men')) {
          listKindEn.push('men');
        }
        if (!listKindAr.includes('رجالي')) {
          listKindAr.push('رجالي');
        }

      }
      if (item === 'women') {
        if (!listKindEn.includes('women')) {
          listKindEn.push('women');
        }
        if (!listKindAr.includes('حريمي')) {
          listKindAr.push('حريمي');
        }
      }
      if (item === 'child') {
        if (!listKindEn.includes('child')) {
          listKindEn.push('child');
        }
        if (!listKindAr.includes('اطفالي')) {
          listKindAr.push('اطفالي');
        }
      }
    })
    checkedEnSeasons.map((item, index) => {
      if (item === 'summer') {
        listSeasonsEn.push('summer')
        listSeasonsAr.push('صيفي')
      }
      if (item === 'winter') {
        listSeasonsEn.push('winter')
        listSeasonsAr.push('شتوي')
      }
    })
    addNewCase.append("gender_en", listKindEn);
    addNewCase.append("gender_ar", listKindAr);
    addNewCase.append("type_en", listSeasonsEn);
    addNewCase.append("type_ar", listSeasonsAr);
    addNewCase.append("initial_amount", formData.numberOfPeople);

  }

  const furnitureEnOption =
    [
      {
        name: "chair",
        value: "chair",

      },
      {
        name: "bed",
        value: "bed",
      },
      {
        name: "table",
        value: "table",
      },
      {
        name: "sofa",
        value: "sofa",
      },
      {
        name: "refrigerator",
        value: "refrigerator",
      },
      {
        name: "cooker",
        value: "cooker",
      },
      {
        name: "washing machine",
        value: "washing machine",
      },
      {
        name: "fan",
        value: "fan",
      },
    ]
  const furnitureArOption =
    [
      {
        name: "كرسي",
        value: "كرسي",
        value1: "chair"
      },
      {
        name: "سرير",
        value: "سرير",
        value1: "bed"
      },
      {
        name: "منضدة",
        value: "منضدة",
        value1: "table"
      },
      {
        name: "اريكة",
        value: "اريكة",
        value1: "sofa"
      },
      {
        name: "ثلاجة",
        value: "ثلاجة",
        value1: "refrigerator"
      },
      {
        name: "بوتجاز",
        value: "بوتجاز",
        value1: "cooker"
      },
      {
        name: "غسالة",
        value: "غسالة",
        value1: "washing machine"
      },
      {
        name: "مروحة",
        value: "مروحة",
        value1: "fan"
      },
    ]

  function deleteFile(e) {
    e.preventDefault()
    setImage([])
  }

  const [arOptionValue, setArOptionValue] = useState()
  function handleFurnitureChange(index, event) {

    let data = [...dataFurniture];

    if (event.target.value === '') {
      data[index][event.target.name] = event.target.value;
      setDataFurniture(data);
      setArOptionValue('')
      data[index]["nameArItem"] = '';
      document.getElementById(`ar-${event.target.getAttribute('data-index')}`).value = ''
    } else {
      data[index][event.target.name] = event.target.value;
      console.log(dataFurniture)
      const ArOption = furnitureArOption.filter(opt => opt.value1 === event.target.value);
      setArOptionValue(ArOption[0].name)
      data[index]["nameArItem"] = ArOption[0].name;
      document.getElementById(`ar-${event.target.getAttribute('data-index')}`).value = ArOption[0].name
      console.log(document.getElementById(`ar-${event.target.getAttribute('data-index')}`).value, 'index')

    }

  }


  const onSubmitHandler = (e) => {

    const toastId = toast.loading("please wait ... ")
    setTimeout(() => { toast.dismiss(toastId); }, 1000);
    e.preventDefault()
    axios.post("https://otrok.invoacdmy.com/api/user/case/store", addNewCase, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      }
    })
      .then(response => {
        toast.success('تم اضافه الحاله بنجاح .. رجاء الانتظار حتي التأكد من البيانات و يتم قبولها من قِبلنا ')
        console.log(response)
      }
      ).catch((err) => { toast.error(err.response.data.message) })

  }

  return (
    <>
      <Modal size="lg" show={show} onHide={handleClose} dir={currentLanguageCode === 'ar' ? 'rtl' : 'ltr'}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            لاضافة حالة يرجي ملئ البيانات
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          {!token ? <p className={`${styles.para}`}> يجب تسجيل دخول لاضافة حالة  <a href='/login' className={`${styles.link}`}> تسجل دخول</a></p> :
            <Form onSubmit={onSubmitHandler}>
              <div className='text-center'>
                <input className={`${styles.fileImg}  input-file-js`} ref={(e) => {
                  addFileInput.current = e
                }} id="input-file" multiple name="img" type="file" onChange={(e) => { previewUploadImage(e) }} />

                {
                  imageUrl.length === 0 ?
                    <>
                      <div ref={addFile} onClick={() => { handleLogo() }}>
                        <img className={`${styles.img}`} ref={imageFirmRef} src={imgNull} alt="" />
                      </div>

                    </>
                    :

                    <div className='case_images'>
                      {imageUrl.length > 0 &&
                        imageUrl.map((item, index) => {
                          return (
                            <div ref={addFile} onClick={() => { handleLogo() }} key={item}>
                              <img className={`${styles.img}`} ref={imageContentRef} src={item} alt="" />

                            </div>
                          );
                        })}
                      <button className='btn' type="button" onClick={(e) => deleteFile(e)}>
                        delete
                      </button>
                    </div>

                }


              </div>

              <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Control name="titleAr" className={`${styles.input}`} placeholder="    اسم الحالة بالعربية" onChange={onChangeHandler} value={formData.titleAr} />
                <Form.Text className={`${styles.msErr}`}>
                  {formError.title}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Control name="titleEn" className={`${styles.input}`} placeholder="    اسم الحالة بالانجيزية" onChange={onChangeHandler} value={formData.titleEn} />
                <Form.Text className={`${styles.msErr}`}>
                  {formError.title}
                </Form.Text>

              </Form.Group>
              <Form.Group className="mb-3" controlId="" >

                <Form.Control
                  name="file"
                  className={`${styles.input} ${style.question}`}
                  placeholder="الملف الملحق"
                  type='file'
                  ref={(e) => { addFileInput.current = e }}
                  onChange={(e) => { previewUploadFile(e) }}
                />
                <p className={` ${style.questionMark}`}><BsQuestionCircle /></p>
                <p className={` ${style.questionMark__para}`}>الملف التعريفي الخاص بالحالة و وصفها</p>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Control as="textarea" rows="3" name="descriptionAr" className={`${styles.textArea}`} placeholder="نبذه مختصره عن الحاله بالعربية" onChange={onChangeHandler} value={formData.descriptionAr} />
                <Form.Text className={`${styles.msErr}`}>
                  {formError.description}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Control as="textarea" rows="3" name="descriptionEn" className={`${styles.textArea}`} placeholder="نبذه مختصره عن الحاله بالانجليزية" onChange={onChangeHandler} value={formData.descriptionEn} />
                <Form.Text className={`${styles.msErr}`}>
                  {formError.description}
                </Form.Text>
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicPassword">
                <select
                  placeholder="State"
                  className={`${styles.input} select`}
                  name="caseTypeId"
                  onChange={onChangeHandler}
                  value={formData.caseTypeId}
                >
                  <option className={styles.option}>نوع الحالة</option>
                  {dataCategories && dataCategories.map(category =>
                    <option className={styles.option} value={category.id} key={category.id}>{category.name}</option>
                  )}
                </select>
                <Form.Text className={`${styles.msErr}`}>
                  {formError.caseType}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <select
                  placeholder="State"
                  className={`${styles.input} select`}
                  name="donationTypeId"
                  onChange={onChangeHandler}
                  value={formData.donationTypeId}
                >
                  <option className={styles.option}> نوع التبرع</option>
                  {dataType && dataType.map(type =>
                    <option className={styles.option} value={type.id} key={type.id} >{type.name}</option>
                  )}
                </select>
                <Form.Text className={`${styles.msErr}`}>
                  {formError.donationType}
                </Form.Text>
              </Form.Group>

              {formData?.donationTypeId === '1' ?
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                  <Form.Control
                    className={`${styles.input}`}
                    name="totalPrice"
                    type='number'
                    placeholder=" المبلغ المطلوب"
                    onChange={onChangeHandler}
                    value={formData.totalPrice} />
                  <Form.Text className={`${styles.msErr}`}>
                    {formError.totalPrice}
                  </Form.Text>
                </Form.Group>
                :
                null
              }
              {formData?.donationTypeId === '2' ?
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                  <Form.Control
                    placeholder=" العدد المتبرعين المطلوب"
                    className={`${styles.input}`}
                    name="numberOfVolunteers"
                    type='number'
                    onChange={onChangeHandler}
                    value={formData.numberOfVolunteers}
                  />
                  <Form.Text className={`${styles.msErr}`}>
                    {formError.totalPrice}
                  </Form.Text>
                </Form.Group>
                :
                null
              }
              {formData?.donationTypeId === '3' ?
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                  <Form.Control
                    placeholder="العدد الكارتين المطلوبة"
                    className={`${styles.input}`}
                    name="numberOfCartons"
                    type='number'
                    onChange={onChangeHandler}
                    value={formData.numberOfCartons}
                  />
                  <Form.Text className={`${styles.msErr}`}>
                    {formError.totalPrice}
                  </Form.Text>
                </Form.Group>
                :
                null
              }
              {formData?.donationTypeId === '4' ?
                <>
                  <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Control
                      placeholder="العدد الاشخاص"
                      className={`${styles.input}`}
                      name="numberOfPeople"
                      type='number'
                      onChange={onChangeHandler}
                      value={formData.numberOfPeople}
                    />
                    <Form.Text className={`${styles.msErr}`}>
                      {formError.totalPrice}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <div className="formInput d-flex mt-2" >
                      <div className="form-group ">
                        <input className="form-group_checklist" type="checkbox" name="men" id="men" value="men" onChange={(e) => { handleCheckedKind(e) }} />
                        <label className="form-group_checklist_label" for="men" value="men">رجالي</label>
                      </div>
                      <div className="form-group ">
                        <input className="form-group_checklist" type="checkbox" id="women" value="women" onChange={(e) => { handleCheckedKind(e) }} />
                        <label className="form-group_checklist_label" for="women" value="women">حريمي</label>
                      </div>
                      <div className="form-group ">
                        <input className="form-group_checklist" type="checkbox" id="child" value="child" onChange={(e) => { handleCheckedKind(e) }} />
                        <label className="form-group_checklist_label" for="child" value="child">اطفالي</label>
                      </div>
                    </div>
                    <div className="formInput d-flex mt-2" >
                      <div className="form-group ">
                        <input className="form-group_checklist" type="checkbox" id="summer" value="summer" onChange={(e) => { handleCheckedSeasons(e) }} />
                        <label className="form-group_checklist_label font" for="summer" value="summer">صيفي</label>
                      </div>
                      <div className="form-group ">
                        <input className="form-group_checklist" type="checkbox" id="winter" value="winter" onChange={(e) => { handleCheckedSeasons(e) }} />
                        <label className="form-group_checklist_label " for="winter" value="winter">شتوي</label>
                      </div>
                    </div>
                  </Form.Group>
                </>
                :
                null
              }
              {formData?.donationTypeId === '5' ?
                <>

                  {dataFurniture && dataFurniture.map((item, index) => (
                    <>
                      <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Control
                          placeholder="العدد الاثاث"
                          className={`${styles.input}`}
                          name="amountItem"
                          type='number'
                          value={item.amountItem}
                          onChange={event => handleFormChange(index, event)}
                        />
                        <Form.Text className={`${styles.msErr}`}>
                          {formError.totalPrice}
                        </Form.Text>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <select
                          placeholder={`item ${index} `}
                          className={`${styles.input} select`}
                          name="nameEnItem"
                          data-index={index}
                          onChange={event => handleFurnitureChange(index, event)}
                          value={item.nameEnItem}
                        >
                          <option value=''> اسم القطعه بالانجليزية</option>
                          {furnitureEnOption && furnitureEnOption.map(opt =>
                            <option value={opt.value} name={opt.name} key={opt.value} >{opt.value}</option>
                          )}
                        </select>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <select
                          placeholder="furniture"
                          className={`${styles.input} select`}
                          id={`ar-${index}`}
                          name="nameArItem"
                          disabled
                        >
                          <option value=''> اسم القطعه بالعربية </option>
                          {furnitureArOption && furnitureArOption.map(opt =>
                            <option value={opt.value} name={opt.name} key={opt.value} >{opt.name}</option>
                          )}
                        </select>
                      </Form.Group>

                      {
                        index > 0 || dataFurniture.length === 2 ?
                          <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
                            <button type='button' onClick={() => { deleteItem(index) }} className={`${styles["add-uncle-button"]}`} ><img width={20} src={minus} alt="" />مسح القطعة</button>
                          </Form.Group>
                          :
                          <>
                          </>

                      }


                    </>
                  ))
                  }


                  <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
                    <button type="button" className={`${styles["add-uncle-button"]}`} onClick={() => { addItem() }}><img src={plus} alt="" />  اضافه القطعة</button>
                  </Form.Group>
                </>
                :
                null
              }
              <Button type="submit" className={styles.signup__btn} >
                اضافة الان
              </Button>
            </Form>
          }
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  )
}

export default AddCase