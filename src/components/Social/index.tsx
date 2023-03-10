
export interface SocialProps {
    named?: boolean,
    width?: string,
    heigth?: string,
}

function AllSocial ({width="26", heigth="25", named=false}: SocialProps) {
    return (
        <div className="w-full flex flex-row flex-wrap justify-between max-w-[250px]">
            <SocialGit width={width} named={named} heigth={heigth} />
            <SocialSapp width={width} named={named} heigth={heigth} />
            <SocialFb width={width} named={named} heigth={heigth} />
            <SocialTwit width={width} named={named} heigth={heigth} />
        </div>
    )
}
AllSocial.displayName = 'Social.All'

function SocialGit ({width="26", heigth="25", named=false}: SocialProps) {
    return (
        <a href="https://www.github.com/hericogimo" target="_blank" className="w-10 h-10 flex justify-center items-center">
            <svg width={width} height={heigth} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_22_5)">
                <path d="M16.9886 0C8.14865 0 0.988647 7.16 0.988647 16C0.988647 23.08 5.56865 29.06 11.9286 31.18C12.7286 31.32 13.0286 30.84 13.0286 30.42C13.0286 30.04 13.0086 28.78 13.0086 27.44C8.98865 28.18 7.94865 26.46 7.62865 25.56C7.44865 25.1 6.66865 23.68 5.98865 23.3C5.42865 23 4.62865 22.26 5.96865 22.24C7.22865 22.22 8.12865 23.4 8.42865 23.88C9.86865 26.3 12.1686 25.62 13.0886 25.2C13.2286 24.16 13.6486 23.46 14.1086 23.06C10.5486 22.66 6.82865 21.28 6.82865 15.16C6.82865 13.42 7.44865 11.98 8.46865 10.86C8.30865 10.46 7.74865 8.82 8.62865 6.62C8.62865 6.62 9.96865 6.2 13.0286 8.26C14.3086 7.9 15.6686 7.72 17.0286 7.72C18.3886 7.72 19.7486 7.9 21.0286 8.26C24.0886 6.18 25.4286 6.62 25.4286 6.62C26.3086 8.82 25.7486 10.46 25.5886 10.86C26.6086 11.98 27.2286 13.4 27.2286 15.16C27.2286 21.3 23.4886 22.66 19.9286 23.06C20.5086 23.56 21.0086 24.52 21.0086 26.02C21.0086 28.16 20.9886 29.88 20.9886 30.42C20.9886 30.84 21.2886 31.34 22.0886 31.18C25.2651 30.108 28.0253 28.0667 29.9807 25.3435C31.9361 22.6203 32.9881 19.3525 32.9886 16C32.9886 7.16 25.8286 0 16.9886 0Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_22_5">
                        <rect width="32" height="32" fill="white" transform="translate(0.988647)"/>
                    </clipPath>
                </defs>
            </svg>
        </a>
    )
}
SocialGit.displayName = 'Social.Git'

function SocialSapp ({width="26", heigth="25", named=false}: SocialProps) {
    return (
        <a href="https://api.whatsapp.com/send?phone=+258856131320&text=Ol?? H??rico! V?? o seu portf??lio" target="_blank" className="w-10 h-10 flex justify-center items-center">
            <svg width={width} height={heigth} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_22_7)">
                <path d="M28.1906 4.6521C26.7236 3.17145 24.9765 1.99759 23.0512 1.19891C21.126 0.40023 19.061 -0.00728855 16.9766 9.86611e-05C8.24265 9.86611e-05 1.12465 7.1161 1.11665 15.8521C1.11665 18.6501 1.84865 21.3721 3.23065 23.7821L0.988647 32.0001L9.39665 29.7961C11.7227 31.0619 14.3285 31.7254 16.9766 31.7261H16.9846C25.7206 31.7261 32.8366 24.6101 32.8446 15.8661C32.8466 13.7822 32.4363 11.7185 31.6372 9.79386C30.8381 7.86924 29.6661 6.12176 28.1886 4.6521H28.1906ZM16.9766 29.0421C14.6146 29.0429 12.2961 28.4073 10.2646 27.2021L9.78465 26.9141L4.79665 28.2221L6.12865 23.3561L5.81665 22.8541C4.49626 20.7547 3.79794 18.3242 3.80265 15.8441C3.80265 8.5921 9.71665 2.6761 16.9846 2.6761C18.7161 2.67299 20.4311 3.01265 22.0307 3.67548C23.6303 4.33832 25.0828 5.31122 26.3046 6.5381C27.5307 7.7602 28.5027 9.21295 29.1645 10.8126C29.8263 12.4122 30.1649 14.127 30.1606 15.8581C30.1526 23.1361 24.2386 29.0421 16.9766 29.0421ZM24.2066 19.1741C23.8126 18.9761 21.8666 18.0181 21.5006 17.8821C21.1366 17.7521 20.8706 17.6841 20.6106 18.0801C20.3446 18.4741 19.5846 19.3721 19.3566 19.6301C19.1286 19.8961 18.8926 19.9261 18.4966 19.7301C18.1026 19.5301 16.8246 19.1141 15.3126 17.7601C14.1326 16.7101 13.3426 15.4101 13.1066 15.0161C12.8786 14.6201 13.0846 14.4081 13.2826 14.2101C13.4566 14.0341 13.6766 13.7461 13.8746 13.5181C14.0746 13.2901 14.1406 13.1221 14.2706 12.8581C14.4006 12.5901 14.3386 12.3621 14.2406 12.1641C14.1406 11.9661 13.3506 10.0121 13.0166 9.2241C12.6966 8.4461 12.3706 8.5541 12.1266 8.5441C11.8986 8.5301 11.6326 8.5301 11.3666 8.5301C11.1658 8.53509 10.9681 8.58155 10.786 8.66656C10.604 8.75157 10.4414 8.8733 10.3086 9.0241C9.94465 9.4201 8.92665 10.3781 8.92665 12.3321C8.92665 14.2861 10.3466 16.1641 10.5466 16.4301C10.7426 16.6961 13.3346 20.6941 17.3126 22.4141C18.2526 22.8241 18.9926 23.0661 19.5706 23.2501C20.5206 23.5541 21.3786 23.5081 22.0626 23.4101C22.8226 23.2941 24.4046 22.4501 24.7386 21.5241C25.0666 20.5961 25.0666 19.8041 24.9666 19.6381C24.8686 19.4701 24.6026 19.3721 24.2066 19.1741Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_22_7">
                        <rect width="32" height="32" fill="white" transform="translate(0.988647)"/>
                    </clipPath>
                </defs>
            </svg>
        </a>
    )
}
SocialSapp.displayName = 'Social.Sapp'

function SocialFb ({width="26", heigth="25", named=false}: SocialProps) {
    return (
        <a href="https://web.facebook.com/ericomateusgimo/" target="_blank" className="w-10 h-10 flex justify-center items-center">
            <svg width={width} height={heigth} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_22_9)">
                <path d="M32.9887 16.098C32.9887 7.20599 25.8246 -0.00201416 16.9886 -0.00201416C8.14865 -1.41601e-05 0.98465 7.20599 0.98465 16.1C0.98465 24.134 6.83665 30.794 14.4846 32.002V20.752H10.4246V16.1H14.4886V12.55C14.4886 8.51599 16.8786 6.28799 20.5326 6.28799C22.2847 6.28799 24.1146 6.60199 24.1146 6.60199V10.562H22.0966C20.1106 10.562 19.4907 11.804 19.4907 13.078V16.098H23.9266L23.2186 20.75H19.4886V32C27.1367 30.792 32.9887 24.132 32.9887 16.098Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_22_9">
                        <rect width="32" height="32" fill="white" transform="translate(0.988647)"/>
                    </clipPath>
                </defs>
            </svg>
        </a>
    )
}
SocialFb.displayName = 'Social.Fb'

function SocialTwit ({width="26", heigth="25", named=false}: SocialProps) {
    return (
        <a href="https://twitter.com/HericoGimo" target="_blank" className="w-10 h-10 flex justify-center items-center">
            <svg width={width} height={heigth} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_22_11)">
                <path d="M11.0406 30C23.1166 30 29.7226 19.994 29.7226 11.332C29.7226 11.052 29.7226 10.768 29.7106 10.488C30.9968 9.55695 32.1068 8.40429 32.9886 7.08398C31.7873 7.61368 30.5142 7.96279 29.2106 8.11998C30.5837 7.29926 31.6121 6.00792 32.1046 4.48598C30.8146 5.25023 29.4027 5.78673 27.9306 6.07198C26.941 5.01803 25.6315 4.31982 24.2048 4.0855C22.7782 3.85118 21.3141 4.09383 20.0393 4.77586C18.7646 5.45789 17.7503 6.54124 17.1535 7.8581C16.5568 9.17497 16.411 10.6518 16.7386 12.06C14.1281 11.9291 11.5743 11.2509 9.24273 10.0695C6.91119 8.88802 4.85402 7.22967 3.20465 5.20198C2.36733 6.64815 2.11179 8.35878 2.48994 9.98651C2.86808 11.6142 3.85156 13.037 5.24065 13.966C4.19973 13.9306 3.18169 13.6511 2.26865 13.15V13.24C2.27044 14.7549 2.79526 16.2228 3.7544 17.3955C4.71353 18.5682 6.04814 19.3737 7.53265 19.676C6.96917 19.8312 6.38711 19.9086 5.80265 19.906C5.39062 19.9072 4.97941 19.8691 4.57465 19.792C4.99422 21.0961 5.81119 22.2363 6.91114 23.0529C8.01109 23.8696 9.33892 24.3217 10.7086 24.346C8.38176 26.1736 5.50745 27.1648 2.54865 27.16C2.02729 27.1622 1.50629 27.1321 0.988647 27.07C3.99168 28.9845 7.47924 30.0011 11.0406 30Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_22_11">
                        <rect width="32" height="32" fill="white" transform="translate(0.988647)"/>
                    </clipPath>
                </defs>
            </svg>
        </a>
    )
}
SocialTwit.displayName = 'Social.Twit'

export const Social = {
    All: AllSocial,
    Git: SocialGit,
    Sapp: SocialSapp,
    Fb: SocialFb,
    Twit: SocialTwit
}