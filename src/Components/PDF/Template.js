import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font
} from "@react-pdf/renderer";


const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    padding:"10px",
    fontFamily:"Times-Roman"
  },
  Container:{
    border:"2px solid #00A651",
    height:"100%"
  },
  headingPart:{
    display: "flex",
    height:"130px",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "10px solid #00A651"
  },
  headingLeft:{
    height:"130px",
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
    position:"absolute",
    left:"10px",
    fontWeight:"600",
    alignItems: "center",
  },
  headingMiddle:{
    display: "flex",
    position: "absolute",
    left:"270px",
    top:"20px",
  },
  mainName:{
    textAlign:"left",
    fontSize:"20px",
    fontWeight:"bold",
  },
  address:{
      fontSize:"14px",
  },
  headingRight:{
      display: "flex",
      position:"absolute",
      right:"10px",
      top:"10px"
  },
  contentClass:{
    padding: "10px 20px",
  },
  logoImg:{
      opacity:"0.3",
      width:"80px",
      height:"80px",
  },
  qrCodeImg:{
      width:"100px",
      height:"100px",
  },
  orderImg:{
    width: "100px",
    height: "100px",
    margin: "10px",
  },
  note:{
      fontSize: "16px",
      textAlign: "center",
      fontWeight: "bold",
      marginBottom: "5px",
      textDecoration: "underline",
  },
  boldFont:{
      fontWeight: "bold",
  },
  orderDetails:{
    marginTop:"10px",
    width:"100%",
    alignItems:"center",
  },
  orderDetailTitle:{
    width:"100%",
    borderBottom: "5px solid #00A651",
    fontSize:"16px",
    marginBottom:"10px",
  },
  orderImgaes:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    border:"0.5px solid grey"
  },
  tableRow:{
    display:"flex",
    flexDirection:"row",
    height:"20px",
    alignItems:"center",
    borderBottom:"0.5px solid grey",
    borderLeft:"0.5px solid grey",
    borderRight:"0.5px solid grey",
    width:"100%"
  },
  tableRowFirst:{
    display:"flex",
    flexDirection:"row",
    height:"20px",
    alignItems:"center",
    borderTop:"0.5px solid grey",
    borderBottom:"0.5px solid grey",
    borderLeft:"0.5px solid grey",
    borderRight:"0.5px solid grey",
    width:"100%"
  },
  tableProperty:{
    borderRight:"0.5px solid grey",
    width:"50%",
    marginLeft:"5px",
    textAlign:"left",
    fontSize:"14px",
    fontWeight:"bold",
  },
  tableValue:{
    textAlign:"left",
    marginLeft:"5px",
    fontSize:"12px",
    fontWeight:"light"
  },
  tableValueLabel:{
    textAlign:"left",
    marginLeft:"5px",
    fontSize:"9px",
    fontWeight:"light",
    color:"#ffffff",
    backgroundColor:"#00A651",
    padding:"2px",
  },
  orderImgBig:{
    width: "300px",
    height: "300px",
    margin: "10px",
  },
  PageTitleSecond:{
    width:"100%",
    textAlign:"center"
  }



});

export function PdfDocument(props) {
  // console.log("pdf props", props.data);
  // const QRCODE="http://localhost:8080/uploads/qrcode/";
  const ORDERIMG="http://localhost:8080/uploads/orderImage/";
  const LOGOIMG="http://localhost:8080/uploads/logo.png";

  
  // const QRCODE="https://api.shreekalptaru.com/uploads/qrcode/"
  // const ORDERIMG="https://api.shreekalptaru.com/uploads/orderImage/"
  // const LOGOIMG="https://api.shreekalptaru.com/uploads/logo.png"

  //future ref
  // <View style={styles.headingRight}>
  //               <Image 
  //               style={styles.qrCodeImg} 
  //               src={QRCODE+props.data._id+"_qr.png"?QRCODE+props.data._id+"_qr.png":"150.jpg"}
  //               source={{
  //                 header: {
  //                   'Access-Control-Allow-Origin': '*'
  //                }
  //               }}/>
  //               </View>
  return (
    <Document>
      <Page style={styles.page}>
        {props.data
          ?
          <View style={styles.Container}>
            <View style={styles.headingPart}>
                <View style={styles.headingLeft}>
                    
                    <View style={styles.address}>
                        <Text style={styles.mainName}>Shree Kalptaru</Text>
                        <Text>109, 1st Floor, 68/72, Ganpat Bhavan,</Text>
                        <Text>Dhanji Street, Zaveri Bazaar,</Text>
                        <Text>Mumbai - 400003, Maharashtra, India</Text>
                    </View>
                </View>
                <View style={styles.headingMiddle}>
                    <Image 
                    style={styles.logoImg} 
                    src={LOGOIMG?LOGOIMG:"150.jpg"} 
                    source={{
                      header: {
                        'Access-Control-Allow-Origin': '*'
                     }
                    }}/>
                </View>
                
            </View>
            <View style={styles.contentClass}>
              <View style={styles.orderDetails}>
                  <View style={styles.orderDetailTitle}>
                    <Text>Order Details</Text>
                  </View>
                  <View style={styles.orderImgaes}>
                    {
                      props.data.orderImg.map((ImgObj,index) => {
                        return <Image key={index} style={styles.orderImg} source={ORDERIMG+ImgObj.img?ORDERIMG+ImgObj.img:"150.jpg"}/>
                      })
                    }
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableProperty}>Order Reference No</Text>
                    <Text style={styles.tableValue}>{props.data._id?props.data._id:"Not Exist"}</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableProperty}>Order Created Date</Text>
                    <Text style={styles.tableValue}>{props.data.createdAt?props.data.createdAt:"Not Exist"}</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableProperty}>Order Delivery Date</Text>
                    <Text style={styles.tableValue}>{props.data.deliveryDate?props.data.deliveryDate:"Not Exist"}</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableProperty}>Order Status</Text>
                    <Text style={styles.tableValueLabel}>{props.data.orderStatus?props.data.orderStatus:"Not Exist"}</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableProperty}>Placed By</Text>
                    <Text style={styles.tableValue}>{props.data.createdby?props.data.createdby.fullname:"Not Exist"}</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableProperty}>Ref Number</Text>
                    <Text style={styles.tableValue}>{props.data.referenceNo?props.data.referenceNo:"Not Exist"}</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableProperty}>Quantity</Text>
                    <Text style={styles.tableValue}>{props.data.quantity?props.data.quantity+" pcs":"Not Exist"}</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableProperty}>Weight(in gms)</Text>
                    <Text style={styles.tableValue}>{props.data.weightFrom?props.data.weightFrom+"-"+props.data.weightFrom+"gm":"Not Exist"}</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableProperty}>Melting (in degree celsius)</Text>
                    <Text style={styles.tableValue}>{props.data.melting?props.data.melting:"Not Exist"}</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableProperty}>Priority</Text>
                    <Text style={styles.tableValue}>{props.data.priority?props.data.priority:"Not Exist"}</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableProperty}>Order Type</Text>
                    <Text style={styles.tableValue}>{props.data.orderType?props.data.orderType+" Order":"Not Exist"}</Text>
                  </View>
              </View>
            </View>
            {props.isClient?
              <View style={styles.contentClass}>
              <View style={styles.orderDetails}>
                  <View style={styles.orderDetailTitle}>
                    <Text>Client Details</Text>
                  </View>
                  <View style={styles.tableRowFirst}>
                    <Text style={styles.tableProperty}>Client Name</Text>
                    <Text style={styles.tableValue}>{props.data.clientId?props.data.clientId.client_name:"Not Exist"}</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableProperty}>Client Contact</Text>
                    <Text style={styles.tableValue}>{props.data.clientId?props.data.clientId.client_contact:"Not Exist"}</Text>
                  </View>
              </View>
              </View>
              :
              <View style={styles.contentClass}>
              <View style={styles.orderDetails}>
                  <View style={styles.orderDetailTitle}>
                    <Text>Karigar Details</Text>
                  </View>
                  <View style={styles.tableRowFirst}>
                    <Text style={styles.tableProperty}>Karigar Name</Text>
                    <Text style={styles.tableValue}>{props.data.karigarId?props.data.karigarId.karigar_name:"Not Exist"}</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableProperty}>Karigar Contact</Text>
                    <Text style={styles.tableValue}>{props.data.karigarId?props.data.karigarId.karigar_contact:"Not Exist"}</Text>
                  </View>
              </View>
            </View>
            }
            
            <View style={styles.note}>
              <Text>Note : This is a computer generated pdf.</Text>
            </View> 
          </View>
          
          
          : ""}
      </Page>
      {props.data?
        <Page style={styles.page}>
          <View style={styles.Container}>
          <Text style={styles.PageTitleSecond}>Order Images:</Text>
          {
            props.data.orderImg.map((ImgObj,index) => {
              return <Image key={index} style={styles.orderImgBig} source={ORDERIMG+ImgObj.img?ORDERIMG+ImgObj.img:"150.jpg"}/>
            })
          }
          </View>
        </Page>:null}
    </Document>
  );
}
