import { defineType, defineField } from 'sanity';

const postType = defineType({
  title: 'Post Title',
  name: 'post',
  type: 'document',
  fields: [
    defineField({
      title: 'Post Title', //how many types of API (3rd pary api/ pubic / open source)
      name: 'post_title', // develop by developer for use publically json.placeholder is the best example of 3rd party Api
      type: 'string', //json.placeholer / fakestore /rapid Api // iskaybad aik hoti ha private api /custom api example of data of the hospital
    }), //api methods (k clien and serer k beech bat hoti ha ) HTTP/socket/soap sab say ziyada use hoti ha http
    defineField({
      title: 'Post Description',// http k method ha (Get front end sa backend ko data chahiya)
      name: 'post_description', //agar mujhay server par koi data bhajna ha to post use hota ha
      type: 'string', // delete frontend backend ko kehta ha k delete kardo 
    }), //put / patch agar meray pas product ai (title/des/img/rating) agar backend ma mojood data ko correct karrna ha ya changing karni ho to pur ya patch use hota ha
  ], // difference between put and patch thora data update karna ha to patch use hoga aur bohat sari cheezon ko update karna ha to put
}); //method aur bhi ziyada hotay hain lakin ya server khud kartay hain (option /preflight calls: browser call karta ha server ko k ya banda get ki call karr raha ha kiya aisa koi data ha apk pas)
// header ki call ko serrach karna ha
export default postType;
//second SOKCET
//apki koi bhi real-time chat application jo ha wo socket k through chalti ha for example messanger/ notification bhi socket k zariya hota ha
//socket method: connect message mil gya
//disconnect: chcat off kardiya
//Receive: message parh liya 
//Send: message kiya
//soap: architecture interview ma is kay question hotay hain / banking sector johay wo soap par chal raha ha 
//method check karnay hain wo teen hotay hain baray baray ERPs K ANDAR jo apis use hoti ha wo soap hain ku ka ya bohat ziyada secure hota ha isi liya bank bhi isi ko use karta ha
//Encrypt and decrypt: ma jab ap apna data send kartay hain server ko to wo safely chala jai hack na ho to ham apnay data ko encrypt kar ka bhajtay hian  jaisay env.local k name sa file hoti ha us ma bhajtay hain
//BCTRPT /htachig : apkay jo sensitive data ko alphanumerric ma convert kardaita ha 
//DECRYPT: ya us data ko kch function use kar kay us uski asal halat ma convert kar daita haw
//encryption at rest
//encryption at transact datta ja raha ha openly ja raha ha (ik liya ham apna password hash k zariya databse ma save karoonga ta k database hack bh hojai to apka passworrd kisi koi pata nahi chaly)
//xml dikhti ha html ki tarah lakin is main jo ap likh dain gay to wo tag banjai ga 
//response type 
//json = {"name": "hamza"}
//xml = <person><name></name></person>
//HTML = <h2></h2> metaframeworks next.js serrver sa data return kartay hain html ki file ma
//text / texttype = is ma data string form ma jaraha hota ha



//DYNAMIC ROUTING