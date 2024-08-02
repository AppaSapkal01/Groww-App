import LoginScreen from "../screens/auth/LoginScreen";
import HomeScreen from "../screens/dashboard/HomeScreen";
import EmailPasswordScreen from "../screens/auth/EmailPasswordScreen";
import EmailOtpScreen from "../screens/auth/EmailOtpScreen";
import PinScreen from "../screens/auth/PinScreen";
import AccountProtectedScreen from "../screens/auth/AccountProtectedScreen";
import PersonalDetailScreen from "../screens/auth/PersonalDetailScreen";
import ConfirmPinScreen from "../screens/auth/ConfirmPinScreen";
import EmailScreen from "../screens/auth/EmailScreen";
import SetPasswordScreen from '../screens/auth/SetPasswordScreen';
import PhoneScreen from "../screens/auth/PhoneScreen";
import ForgotPassword from "../screens/auth/ForgotPassword";
import AuthVerifactionScreen from "../screens/auth/AuthVerifactionScreen";

export const authStacks = [
    {
        name: "LoginScreen",
        component: LoginScreen,
    },
    {
        name: "EmailPasswordScreen",
        component: EmailPasswordScreen,
    },
    {
        name: "EmailOtpScreen",
        component: EmailOtpScreen,
    },
    {
        name: "PinScreen",
        component: PinScreen,
    },
    {
        name: "AccountProtectedScreen",
        component: AccountProtectedScreen,
    },
    {
        name: "PersonalDetailScreen",
        component: PersonalDetailScreen,
    },
    {
        name: "ConfirmPinScreen",
        component: ConfirmPinScreen,
    },
    {
        name: "EmailScreen",
        component: EmailScreen,
    },
    {
        name: "SetPasswordScreen",
        component: SetPasswordScreen,
    },
    {
        name: "PhoneScreen",
        component: PhoneScreen,
    },
    {
        name: "ForgotPassword",
        component: ForgotPassword,
    },
    {
        name: "AuthVerifactionScreen",
        component: AuthVerifactionScreen,
    },
];

export const dashboardStack = [
    {
        name: "HomeScreen",
        component: HomeScreen,
    },
];

export const mergedStacks = [...dashboardStack, ...authStacks];