import {request} from "../../assets/js/libs/request";
export function getloginData(data){
    let url=process.env.VUE_APP_API+"/home/user/pwdlogin?token="+process.env.VUE_APP_TOKEN;
    return request(url,"post",data)
}