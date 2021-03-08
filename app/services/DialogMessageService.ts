import {UserModel} from "../models/auth-model";
import {showMessage} from "react-native-flash-message";
import I18nContext from "../config/i18n-polyglot";

export const showLoggedUserMessage = (user:UserModel)=>{
    showMessage({
        message: I18nContext.polyglot?.t("welcome") || "Default Welcome",
        description: I18nContext.polyglot?.t("welcome_name_message", {name: user.username}),
        type: "success"
    })
}

export const showLogginUserUnsuccessfullMessage = (messageKey:string)=>{
    showMessage({
        message: "Oops!!!",
        description: I18nContext.polyglot?.t(messageKey),
        type: "danger"
    })
}
export const showErrorOccurredMessage = ()=>{
    showMessage({
        message: "Oops!",
        description: I18nContext.polyglot?.t("something_went_wrong"),
        type: "danger"
    })
}
// export const showLoggedUserMessage = (user:UserModel)=>{
//     showMessage({
//         message: I18nContext.polyglot?.t("welcome") || "Default Welcome",
//         description: I18nContext.polyglot?.t("welcome_name_message", {name: user.username}),
//         type: "success"
//     })
// }
