import React from "react";

interface LogoProps {
    w?: string,
    h?: string,
    size?: 'sm' | 'md' | 'lg' | 'xlg'
}

function Logo({w='135', h='39', size='md'}: LogoProps) {
  return (
    <svg 
      width={w}
      height={h}
      viewBox="0 0 135 39"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_41_1183)">
        <path d="M16 6.5L0 19.5L16 32.5" stroke="#48484B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M34 0.25L20 38.75" stroke="#48484B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M59.944 27.952C59.9653 28.1227 59.976 28.304 59.976 28.496C59.9973 28.688 59.9973 28.8693 59.976 29.04C59.976 29.104 59.9653 29.168 59.944 29.232C59.944 29.296 59.9333 29.36 59.912 29.424C59.8907 29.4453 59.88 29.4667 59.88 29.488C59.88 29.5093 59.8693 29.5307 59.848 29.552C59.8267 29.5733 59.816 29.5947 59.816 29.616C59.7307 29.744 59.6133 29.84 59.464 29.904C59.4213 29.9893 59.3787 30.0853 59.336 30.192C59.2933 30.2987 59.2507 30.3947 59.208 30.48C59.1653 30.608 59.1333 30.6827 59.112 30.704C59.112 30.7253 59.0907 30.7147 59.048 30.672C59.0267 31.2053 59.016 31.824 59.016 32.528C59.016 33.2533 58.9947 33.8293 58.952 34.256C58.952 34.5333 58.984 34.8533 59.048 35.216C59.1333 35.5787 59.0587 35.8453 58.824 36.016C58.696 36.1227 58.6213 36.0693 58.6 35.856C58.6 35.664 58.6213 35.4187 58.664 35.12C58.7067 34.8427 58.7173 34.6187 58.696 34.448C58.6747 33.872 58.664 33.1893 58.664 32.4C58.664 31.6107 58.6213 30.9067 58.536 30.288C58.5147 30.4373 58.504 30.576 58.504 30.704C58.504 30.832 58.4827 30.96 58.44 31.088C58.44 31.0667 58.3973 31.056 58.312 31.056C58.2907 31.0347 58.2373 31.0027 58.152 30.96C58.088 30.9173 58.056 30.8853 58.056 30.864C58.0347 30.8 58.0133 30.736 57.992 30.672C57.992 30.608 57.992 30.544 57.992 30.48C57.928 30.5867 57.8533 30.6827 57.768 30.768C57.704 30.8533 57.6507 30.9173 57.608 30.96C57.5653 31.0027 57.5013 31.0453 57.416 31.088C57.3947 31.1307 57.3733 31.184 57.352 31.248C57.352 31.312 57.3307 31.3653 57.288 31.408C57.2667 31.4933 57.224 31.5787 57.16 31.664C57.1173 31.7707 57.0747 31.856 57.032 31.92C57.0107 31.9413 56.9893 31.984 56.968 32.048C56.9467 32.1333 56.9253 32.1653 56.904 32.144C56.8613 31.9947 56.84 31.8453 56.84 31.696C56.84 31.568 56.8187 31.44 56.776 31.312C56.776 31.2693 56.7547 31.248 56.712 31.248C56.6693 31.248 56.648 31.2587 56.648 31.28C56.6053 31.4293 56.584 31.5787 56.584 31.728C56.584 31.8773 56.5627 32.016 56.52 32.144C56.4987 32.1867 56.4773 32.1653 56.456 32.08C56.4347 31.9947 56.4027 31.9413 56.36 31.92C56.3173 31.792 56.2747 31.6853 56.232 31.6C56.2107 31.5147 56.168 31.408 56.104 31.28C56.0613 31.1733 56.0187 31.0773 55.976 30.992C55.9547 30.928 55.9227 30.8747 55.88 30.832C55.8587 30.7893 55.8587 30.7893 55.88 30.832C55.88 30.832 55.8373 30.7787 55.752 30.672C55.6667 30.5653 55.592 30.48 55.528 30.416V30.384C55.5067 30.384 55.496 30.3947 55.496 30.416C55.4533 30.672 55.432 30.928 55.432 31.184C55.432 31.4613 55.4107 31.728 55.368 31.984C55.368 31.984 55.2827 31.984 55.112 31.984C55.0267 31.984 54.984 31.984 54.984 31.984C54.92 31.6213 54.8987 31.3653 54.92 31.216C54.9627 31.088 54.92 30.8427 54.792 30.48C54.5573 30.6507 54.4507 30.9067 54.472 31.248C54.4933 31.5893 54.4827 31.8987 54.44 32.176C54.4187 32.2827 54.3973 32.4427 54.376 32.656C54.376 32.8693 54.3547 32.9227 54.312 32.816C54.248 32.5173 54.216 32.2187 54.216 31.92C54.2373 31.6213 54.2267 31.3227 54.184 31.024C54.184 31.0453 54.1413 31.056 54.056 31.056L53.864 30.96C53.864 30.9813 53.8533 30.992 53.832 30.992C53.832 31.0133 53.832 31.0347 53.832 31.056C53.832 31.0773 53.8 31.0347 53.736 30.928C53.672 30.8427 53.6293 30.8 53.608 30.8L53.576 30.768L53.32 30.736C53.2987 30.736 53.2667 30.7147 53.224 30.672C53.2027 30.6507 53.192 30.6507 53.192 30.672C53.1493 31.0133 53.128 31.344 53.128 31.664C53.128 31.984 53.096 32.304 53.032 32.624C53.032 32.7093 53.0107 32.6667 52.968 32.496C52.9467 32.3467 52.9253 32.2293 52.904 32.144C52.8827 31.8453 52.872 31.536 52.872 31.216C52.8933 30.9173 52.8613 30.6293 52.776 30.352C52.7547 30.2453 52.7547 30.32 52.776 30.576C52.7973 30.832 52.7547 31.0133 52.648 31.12C52.6053 31.184 52.584 31.1413 52.584 30.992C52.584 30.8427 52.5627 30.7253 52.52 30.64L52.424 30.192C52.4027 30.128 52.3813 30.064 52.36 30C52.36 29.9573 52.3387 29.9147 52.296 29.872C52.2107 29.7867 52.1467 29.712 52.104 29.648C52.04 29.5627 51.9973 29.4773 51.976 29.392C51.976 29.3707 51.9653 29.3493 51.944 29.328C51.944 29.3067 51.944 29.2853 51.944 29.264C51.9227 28.9653 51.912 28.656 51.912 28.336C51.9333 28.016 51.944 27.7173 51.944 27.44V22.608C51.944 21.8613 51.944 21.4667 51.944 21.424C51.944 21.3813 51.944 21.456 51.944 21.648C51.944 21.7973 51.9333 21.9573 51.912 22.128C51.8907 22.2773 51.8587 22.3093 51.816 22.224C51.7947 22.2453 51.7627 22.2773 51.72 22.32C51.6987 22.3413 51.656 22.4053 51.592 22.512C51.528 22.5973 51.4533 22.6827 51.368 22.768C51.304 22.832 51.24 22.9173 51.176 23.024L49.928 24.784C49.864 24.848 49.7893 24.9333 49.704 25.04C49.64 25.1253 49.5547 25.2107 49.448 25.296C49.3627 25.488 49.2987 25.7653 49.256 26.128C49.2347 26.4693 49.2133 26.704 49.192 26.832C49.1707 26.9173 49.16 27.0347 49.16 27.184C49.1813 27.312 49.1387 27.3973 49.032 27.44C48.9467 27.4613 48.904 27.3973 48.904 27.248C48.9253 27.0987 48.9253 26.9813 48.904 26.896C48.8827 26.6187 48.872 26.352 48.872 26.096C48.872 25.8187 48.8507 25.5413 48.808 25.264C48.744 25.2213 48.68 25.1573 48.616 25.072C48.616 25.0507 48.6053 25.04 48.584 25.04L48.392 24.72C48.2427 24.464 48.104 24.1973 47.976 23.92C47.8693 23.6427 47.7307 23.3653 47.56 23.088C47.5387 23.0667 47.5067 23.0133 47.464 22.928C47.3147 22.736 47.144 22.5653 46.952 22.416L46.888 22.352L46.792 22.224C46.7707 22.224 46.76 22.224 46.76 22.224C46.76 22.224 46.76 22.3093 46.76 22.48V27.408C46.76 27.664 46.76 27.92 46.76 28.176C46.7813 28.432 46.792 28.688 46.792 28.944C46.792 29.0293 46.792 29.1147 46.792 29.2C46.792 29.264 46.7707 29.3387 46.728 29.424C46.6853 29.5093 46.664 29.552 46.664 29.552C46.6427 29.5947 46.6107 29.6373 46.568 29.68C46.44 29.808 46.344 29.8827 46.28 29.904C46.28 29.904 46.2587 29.9253 46.216 29.968C46.152 30.0533 46.12 30.1173 46.12 30.16C46.12 30.16 46.1307 30.1493 46.152 30.128C46.1733 30.1067 46.184 30.1067 46.184 30.128C46.2053 30.128 46.2053 30.1387 46.184 30.16C46.184 30.1813 46.1733 30.192 46.152 30.192C46.152 30.192 46.1307 30.2133 46.088 30.256C46.088 30.2773 46.0667 30.3093 46.024 30.352C45.9387 30.4373 45.8213 30.5333 45.672 30.64C45.544 30.7467 45.4053 30.7893 45.256 30.768C45.0427 30.7253 44.936 30.704 44.936 30.704C44.9573 30.704 45.0107 30.704 45.096 30.704C45.1813 30.7253 45.2453 30.7253 45.288 30.704C45.352 30.704 45.2987 30.6933 45.128 30.672C45.1067 30.672 45.0853 30.6613 45.064 30.64C45.0427 30.64 45.0107 30.64 44.968 30.64C44.9467 30.64 44.9147 30.6613 44.872 30.704C44.8293 30.768 44.7867 30.7893 44.744 30.768L44.488 30.512C44.488 30.4267 44.4667 30.4053 44.424 30.448C44.3387 30.4907 44.328 30.608 44.392 30.8C44.456 30.992 44.4347 31.0773 44.328 31.056C44.2213 31.0133 44.2 30.8747 44.264 30.64C44.3493 30.4267 44.328 30.3307 44.2 30.352C44.136 30.352 44.1147 30.416 44.136 30.544C44.1573 30.6933 44.1787 30.8213 44.2 30.928C44.2213 31.056 44.1893 31.1093 44.104 31.088C43.9973 31.0453 43.944 30.9493 43.944 30.8C43.9653 30.6507 43.976 30.5227 43.976 30.416C43.9333 30.416 43.8907 30.4373 43.848 30.48C43.72 30.5653 43.6027 30.6507 43.496 30.736C43.4107 30.8427 43.3147 30.9493 43.208 31.056L42.824 31.536C42.8027 31.5573 42.7813 31.6 42.76 31.664C42.7387 31.7493 42.7173 31.7813 42.696 31.76C42.6533 31.5467 42.632 31.3333 42.632 31.12C42.632 30.9067 42.6107 30.6933 42.568 30.48C42.5467 30.5013 42.504 30.512 42.44 30.512C42.3973 30.5333 42.3547 30.5653 42.312 30.608C42.2907 30.672 42.2693 30.7467 42.248 30.832C42.248 30.9173 42.2267 30.992 42.184 31.056C42.1627 31.0773 42.1413 31.0667 42.12 31.024C42.0987 30.9813 42.0773 30.9493 42.056 30.928C42.0133 30.8853 41.96 30.8107 41.896 30.704C41.832 30.5973 41.7573 30.5547 41.672 30.576C41.5867 30.5973 41.5227 30.6293 41.48 30.672C41.4587 30.736 41.3947 30.768 41.288 30.768C41.1387 30.768 41.0107 30.7147 40.904 30.608C40.8187 30.5013 40.712 30.416 40.584 30.352C40.4347 30.3307 40.4027 30.4053 40.488 30.576C40.5733 30.7467 40.5413 31.0453 40.392 31.472C40.3707 31.4933 40.3493 31.472 40.328 31.408C40.3067 31.344 40.2853 31.3013 40.264 31.28C40.2427 31.2373 40.2213 31.1947 40.2 31.152C40.1787 31.1307 40.1573 31.0987 40.136 31.056C40.0507 30.928 39.976 30.7893 39.912 30.64C39.848 30.4907 39.784 30.3413 39.72 30.192L39.336 29.968C39.336 29.968 39.2933 29.9467 39.208 29.904C39.016 29.7973 38.8987 29.68 38.856 29.552C38.8133 29.4453 38.7813 29.36 38.76 29.296C38.76 29.2107 38.76 29.136 38.76 29.072V8.464C38.76 8.22933 38.8347 8.03733 38.984 7.888C39.0053 7.84533 39.0267 7.824 39.048 7.824C39.0693 7.80267 39.0907 7.78133 39.112 7.76C39.1333 7.76 39.144 7.76 39.144 7.76C39.144 7.73867 39.1547 7.728 39.176 7.728C39.2827 7.664 39.3893 7.632 39.496 7.632C39.6027 7.61067 39.7093 7.6 39.816 7.6H45.128C45.2347 7.6 45.352 7.6 45.48 7.6C45.6293 7.57867 45.768 7.57867 45.896 7.6C46.3867 7.6 46.664 7.824 46.728 8.272C46.7707 8.464 46.7813 8.66667 46.76 8.88C46.76 9.09333 46.76 9.296 46.76 9.488V14.8L46.888 15.184H51.944V9.488C51.944 9.296 51.9333 9.09333 51.912 8.88C51.8907 8.64533 51.912 8.42133 51.976 8.208C52.0827 7.80267 52.36 7.6 52.808 7.6C52.936 7.57867 53.064 7.57867 53.192 7.6C53.3413 7.6 53.4693 7.6 53.576 7.6H59.08C59.208 7.6 59.304 7.62133 59.368 7.664C59.432 7.68533 59.5067 7.71733 59.592 7.76C59.784 7.888 59.9013 8.08 59.944 8.336C59.9867 8.528 59.9973 8.73067 59.976 8.944C59.9547 9.15733 59.944 9.34933 59.944 9.52V27.952ZM44.52 30.928C44.456 30.8853 44.4453 30.7787 44.488 30.608C44.5307 30.6933 44.5947 30.8 44.68 30.928C44.7867 31.0773 44.84 31.1627 44.84 31.184C44.84 31.2267 44.7333 31.1413 44.52 30.928ZM87.3508 29.296C87.3294 29.3173 87.3188 29.3493 87.3188 29.392C87.3188 29.4133 87.3081 29.4347 87.2868 29.456C87.2441 29.5413 87.2228 29.584 87.2228 29.584C87.2014 29.6693 87.1694 29.7227 87.1268 29.744C87.0841 29.7653 87.0414 29.7973 86.9988 29.84L86.8708 29.936C86.8068 30.2133 86.7534 30.48 86.7108 30.736C86.6894 31.0133 86.6574 31.2907 86.6148 31.568C86.5934 31.6747 86.5721 31.8347 86.5508 32.048C86.5508 32.2613 86.5294 32.3147 86.4868 32.208C86.4228 31.9307 86.3908 31.6533 86.3908 31.376C86.4121 31.0987 86.4014 30.8213 86.3588 30.544C86.3588 30.5227 86.3374 30.5227 86.2948 30.544C86.2734 30.5867 86.2521 30.608 86.2308 30.608C86.1881 30.6293 86.1348 30.6613 86.0708 30.704C86.0068 30.7467 85.9321 30.7573 85.8468 30.736C85.8254 30.736 85.7934 30.7147 85.7508 30.672C85.5801 30.672 85.3988 30.5973 85.2068 30.448C85.1854 30.512 85.1748 30.5867 85.1748 30.672C85.1961 30.7787 85.1748 30.8533 85.1108 30.896C85.0468 30.9387 85.0148 30.9067 85.0148 30.8C85.0148 30.6933 85.0041 30.608 84.9828 30.544C84.9828 30.544 84.9721 30.448 84.9508 30.256C84.9508 30.0853 84.8548 30.0427 84.6628 30.128C84.6414 30.1493 84.6094 30.1813 84.5668 30.224C84.5454 30.2667 84.5028 30.32 84.4388 30.384C84.3748 30.4693 84.3001 30.544 84.2148 30.608C84.1934 30.6293 84.1614 30.6613 84.1188 30.704C84.0974 30.768 84.0654 30.8213 84.0228 30.864C83.9588 30.9067 83.8948 30.896 83.8308 30.832C83.7881 30.7893 83.7454 30.7573 83.7028 30.736C83.6814 30.736 83.6281 30.7467 83.5428 30.768C83.4788 30.8107 83.4468 30.8427 83.4468 30.864C83.4468 30.864 83.4361 30.864 83.4148 30.864C83.4148 30.864 83.4148 30.8747 83.4148 30.896C83.4148 30.896 83.3934 30.9173 83.3508 30.96C83.2228 31.1093 83.1268 31.28 83.0628 31.472C82.9988 31.6853 82.9241 31.8773 82.8388 32.048C82.7961 32.1333 82.7428 32.2293 82.6788 32.336C82.6361 32.464 82.5614 32.56 82.4548 32.624C82.4334 32.9013 82.4121 33.1787 82.3908 33.456C82.3908 33.7333 82.3694 34.0107 82.3268 34.288C82.3054 34.352 82.2841 34.448 82.2628 34.576C82.2628 34.704 82.2414 34.736 82.1988 34.672C82.1348 34.544 82.1028 34.4053 82.1028 34.256C82.1028 34.128 82.0921 33.9893 82.0708 33.84C82.0494 33.6053 82.0388 33.3813 82.0388 33.168C82.0388 32.9547 82.0174 32.7413 81.9748 32.528C81.8468 32.4213 81.7508 32.3253 81.6868 32.24C81.6014 32.112 81.5054 31.9733 81.3988 31.824C81.3134 31.6747 81.2174 31.5253 81.1108 31.376C81.0254 31.2267 80.9401 31.088 80.8548 30.96C80.7908 30.832 80.7161 30.704 80.6308 30.576C80.6094 30.5333 80.5774 30.4907 80.5347 30.448L80.4388 30.288H80.4068C80.3854 30.288 80.3534 30.2347 80.3108 30.128C80.2894 30.0427 80.2574 29.968 80.2148 29.904C80.3214 30.0107 80.3534 30.0427 80.3108 30C80.2894 29.9573 80.2361 29.8933 80.1508 29.808C80.0868 29.7227 80.0441 29.68 80.0228 29.68L79.9908 29.648L79.8948 29.488C79.8948 29.4667 79.8841 29.456 79.8628 29.456C79.8628 29.4347 79.8628 29.4133 79.8628 29.392C79.7988 29.2213 79.7774 29.0293 79.7987 28.816C79.8201 28.5813 79.8308 28.3787 79.8308 28.208V20.624C79.8308 20.9867 79.8414 21.1573 79.8628 21.136C79.8841 21.1147 79.9054 21.0187 79.9268 20.848C79.9481 20.6773 79.9481 20.5387 79.9268 20.432C79.9054 20.304 79.8521 20.3253 79.7668 20.496L79.6388 20.688C79.5961 20.7307 79.5748 20.7627 79.5748 20.784C79.5961 20.784 79.5854 20.8053 79.5428 20.848C79.5428 20.848 79.5321 20.8587 79.5108 20.88C79.5108 20.88 79.5108 20.8907 79.5108 20.912C79.4041 21.0613 79.2974 21.2213 79.1908 21.392C79.1054 21.5627 79.0094 21.7333 78.9028 21.904C78.7321 22.1813 78.5614 22.4693 78.3908 22.768C78.2201 23.0667 78.0388 23.3547 77.8468 23.632C77.8254 23.696 77.7934 23.76 77.7508 23.824C77.7081 23.888 77.6654 23.9413 77.6228 23.984C77.5588 24.0693 77.4841 24.1547 77.3988 24.24C77.3348 24.3253 77.2494 24.3893 77.1428 24.432C77.1214 24.4533 77.0894 24.4853 77.0468 24.528C77.0254 24.5707 76.9828 24.6453 76.9188 24.752C76.8974 24.7733 76.8654 24.784 76.8228 24.784C76.8014 25.0187 76.7801 25.3813 76.7588 25.872C76.7588 26.3413 76.7481 26.8533 76.7268 27.408C76.7268 27.9627 76.7161 28.4853 76.6948 28.976C76.6948 29.4453 76.6841 29.7973 76.6628 30.032C76.6628 30.0533 76.6414 30.064 76.5988 30.064C76.5561 30.064 76.5348 30.0533 76.5348 30.032C76.5134 29.7333 76.4921 29.264 76.4708 28.624C76.4708 27.984 76.4708 27.3333 76.4708 26.672C76.4708 26.0107 76.4494 25.488 76.4068 25.104C76.4068 25.104 76.3748 25.072 76.3108 25.008L76.2788 25.04C76.2788 25.04 76.2788 25.0507 76.2788 25.072C76.2788 25.072 76.2681 25.072 76.2468 25.072C76.2468 25.1147 76.2254 25.1573 76.1828 25.2C76.1401 25.2853 76.0868 25.3707 76.0228 25.456C75.9588 25.52 75.8841 25.5733 75.7988 25.616C75.7561 25.7227 75.7454 25.8613 75.7668 26.032C75.7881 26.2027 75.7454 26.2773 75.6388 26.256C75.5321 26.2133 75.5001 26.1173 75.5428 25.968C75.5854 25.7973 75.5854 25.648 75.5428 25.52C75.5001 25.4773 75.4574 25.424 75.4148 25.36C75.3721 25.296 75.3294 25.2533 75.2868 25.232C75.2228 25.168 75.1908 25.136 75.1908 25.136C75.1694 25.2213 75.1374 25.3067 75.0948 25.392C75.0734 25.4773 75.0521 25.5413 75.0308 25.584C75.0308 25.4773 74.9988 25.3493 74.9348 25.2C74.8921 25.2427 74.8708 25.2747 74.8708 25.296C74.8708 25.296 74.8494 25.3173 74.8068 25.36C74.7641 25.424 74.7214 25.4987 74.6788 25.584C74.6361 25.6693 74.5934 25.744 74.5508 25.808C74.5294 25.8293 74.4868 25.872 74.4228 25.936C74.3801 25.9787 74.3374 25.9893 74.2948 25.968C74.2521 25.9467 74.2201 25.9253 74.1988 25.904C74.1774 25.8613 74.1454 25.8293 74.1028 25.808C73.9961 25.7013 73.9214 25.5413 73.8788 25.328C73.8361 25.1787 73.7934 25.04 73.7508 24.912C73.7294 24.7627 73.6974 24.6133 73.6548 24.464C73.5694 24.4213 73.4948 24.368 73.4308 24.304C73.3881 24.2187 73.3348 24.144 73.2708 24.08L73.1108 23.824C72.9401 23.5467 72.7694 23.2693 72.5988 22.992C72.4281 22.6933 72.2574 22.4053 72.0868 22.128L71.7988 21.648C71.7348 21.5627 71.6708 21.4773 71.6068 21.392C71.5641 21.3067 71.5108 21.2213 71.4468 21.136L71.3508 20.944C71.3294 20.9013 71.3081 20.8587 71.2868 20.816C71.2654 20.7733 71.2334 20.7307 71.1908 20.688C71.1908 20.6667 71.1801 20.656 71.1588 20.656C71.1588 20.656 71.1588 20.6453 71.1588 20.624C71.1588 20.624 71.1374 20.6027 71.0948 20.56C71.0948 20.4533 71.0734 20.3787 71.0308 20.336C71.0094 20.272 70.9988 20.3253 70.9988 20.496V28.624C70.9988 28.7307 70.9988 28.848 70.9988 28.976C71.0201 29.0827 71.0201 29.1893 70.9988 29.296C70.9988 29.2533 70.9881 29.2747 70.9668 29.36C70.9454 29.424 70.9454 29.4453 70.9668 29.424C70.9454 29.5093 70.8921 29.5947 70.8068 29.68L70.6148 29.872C70.5934 29.9573 70.5721 30.0427 70.5508 30.128C70.5508 30.2347 70.5294 30.3413 70.4868 30.448C70.4441 30.7253 70.3908 30.992 70.3268 31.248C70.2841 31.5253 70.2201 31.8027 70.1348 32.08C70.1134 32.144 70.0814 32.2507 70.0388 32.4C69.9961 32.5493 69.9534 32.656 69.9108 32.72C69.7828 32.848 69.6868 32.8053 69.6228 32.592C69.5588 32.4 69.5161 32.2933 69.4948 32.272C69.4521 32.1013 69.4094 31.92 69.3668 31.728C69.3241 31.5573 69.2814 31.376 69.2388 31.184C69.2174 31.0773 69.2068 30.9707 69.2068 30.864C69.2068 30.7573 69.1854 30.6613 69.1428 30.576C69.1001 30.6187 69.0468 30.6613 68.9828 30.704C68.9188 30.768 68.8548 30.8213 68.7908 30.864C68.7481 31.2693 68.7161 31.6853 68.6948 32.112C68.6948 32.56 68.6734 32.9973 68.6308 33.424C68.6308 33.4453 68.6094 33.4347 68.5668 33.392C68.5241 33.3493 68.5028 33.3173 68.5028 33.296C68.3108 32.976 68.2468 32.6773 68.3108 32.4C68.3748 32.144 68.4388 31.8773 68.5028 31.6C68.5881 31.3227 68.5348 31.0347 68.3428 30.736C68.3214 30.6933 68.3001 30.6507 68.2788 30.608C68.2574 30.5653 68.2254 30.5227 68.1828 30.48C68.1401 30.48 68.1188 30.48 68.1188 30.48C68.0761 30.8213 68.0548 31.152 68.0548 31.472C68.0548 31.8133 68.0334 32.144 67.9908 32.464C67.9908 32.464 67.9481 32.464 67.8628 32.464C67.7774 32.464 67.7348 32.4533 67.7348 32.432C67.7134 32.112 67.6921 31.7813 67.6708 31.44C67.6708 31.12 67.6494 30.7893 67.6068 30.448H67.4468L67.4148 30.416C67.3721 30.416 67.3508 30.416 67.3508 30.416C67.3294 30.6933 67.3188 30.96 67.3188 31.216C67.3188 31.4933 67.2974 31.7707 67.2548 32.048C67.2548 32.0693 67.2121 32.0373 67.1268 31.952C67.0414 31.9093 66.9988 31.8773 66.9988 31.856C66.9561 31.6213 66.9348 31.3973 66.9348 31.184C66.9348 30.9707 66.9241 30.7573 66.9028 30.544C66.8814 30.5653 66.8601 30.5973 66.8388 30.64C66.8174 30.6827 66.8174 30.6827 66.8388 30.64C66.8174 30.704 66.7748 30.768 66.7108 30.832C66.6894 30.8533 66.6574 30.8747 66.6148 30.896C66.5721 30.9387 66.5294 30.9813 66.4868 31.024C66.4228 31.152 66.3801 31.28 66.3588 31.408C66.3374 31.5573 66.2948 31.7067 66.2308 31.856C66.2094 31.8773 66.1881 31.9093 66.1668 31.952C66.1668 31.9947 66.1454 32.0373 66.1028 32.08C66.0601 32.1227 66.0174 32.1227 65.9748 32.08C65.8894 31.9947 65.8361 31.8453 65.8148 31.632C65.7934 31.4187 65.7614 31.28 65.7188 31.216C65.6121 31.1093 65.5161 30.9707 65.4308 30.8C65.3668 30.6507 65.2814 30.4693 65.1748 30.256C65.1534 30.2987 65.1428 30.3307 65.1428 30.352C65.1428 30.3947 65.1321 30.4373 65.1108 30.48C65.0894 30.5013 65.0361 30.4907 64.9508 30.448C64.8868 30.4267 64.8548 30.416 64.8548 30.416C64.7694 30.3733 64.7054 30.3307 64.6628 30.288C64.6841 30.3307 64.6948 30.4053 64.6948 30.512C64.6948 30.6187 64.6521 30.7893 64.5668 31.024C64.5454 31.1093 64.5241 31.184 64.5028 31.248C64.4814 31.312 64.4601 31.3867 64.4388 31.472C64.4174 31.7067 64.4068 32.0693 64.4068 32.56C64.4068 33.072 64.4068 33.6053 64.4068 34.16C64.4068 34.736 64.4068 35.2693 64.4068 35.76C64.4068 36.272 64.3854 36.6453 64.3428 36.88C64.3214 37.0933 64.3001 37.1253 64.2788 36.976C64.2788 36.8267 64.2788 36.5707 64.2788 36.208C64.2788 35.8453 64.2788 35.472 64.2788 35.088C64.2788 34.704 64.2788 34.4053 64.2788 34.192C64.2574 33.552 64.2468 33.0187 64.2468 32.592C64.2468 32.1867 64.2361 31.7813 64.2148 31.376C64.1934 30.992 64.1401 30.5227 64.0548 29.968C63.9694 29.9253 63.8948 29.8827 63.8307 29.84C63.5961 29.6693 63.4788 29.4347 63.4788 29.136V8.464C63.4788 8.22933 63.5641 8.02667 63.7348 7.856C63.9054 7.68533 64.1401 7.6 64.4388 7.6H68.7588C68.9934 7.6 69.2174 7.6 69.4308 7.6C69.6441 7.57867 69.8468 7.62133 70.0388 7.728C70.2734 7.83467 70.4548 7.984 70.5828 8.176C70.7321 8.368 70.8601 8.57067 70.9668 8.784C71.0094 8.82667 71.0414 8.88 71.0628 8.944C71.1054 8.98667 71.1374 9.04 71.1588 9.104L71.3188 9.36C71.5108 9.59467 71.6921 9.872 71.8628 10.192C72.0548 10.4907 72.2361 10.8107 72.4068 11.152L73.5268 13.008C73.7828 13.392 74.0281 13.7867 74.2628 14.192C74.4974 14.5973 74.7321 14.992 74.9668 15.376C75.0094 15.4613 75.0628 15.5573 75.1268 15.664C75.1908 15.7493 75.2441 15.8453 75.2868 15.952L75.4148 16.144L75.5428 15.92C75.5854 15.8133 75.6388 15.7173 75.7028 15.632C75.7668 15.5467 75.8201 15.4613 75.8628 15.376C76.0548 15.0773 76.2468 14.768 76.4388 14.448C76.6308 14.128 76.8228 13.808 77.0148 13.488L77.2388 13.104C77.2388 13.0827 77.2388 13.072 77.2388 13.072C77.2601 13.072 77.2708 13.0613 77.2708 13.04C77.2708 13.04 77.2921 13.0187 77.3348 12.976L78.4228 11.152C78.4441 11.152 78.4548 11.152 78.4548 11.152C78.4548 11.1307 78.4548 11.12 78.4548 11.12C78.6254 10.8 78.7961 10.4907 78.9668 10.192C79.1588 9.89333 79.3294 9.62667 79.4788 9.392L79.6708 9.072C79.7774 8.90133 79.8734 8.74133 79.9588 8.592C80.0654 8.42133 80.1828 8.26133 80.3108 8.112C80.3108 8.09067 80.3214 8.08 80.3428 8.08C80.4494 7.93067 80.5988 7.81333 80.7908 7.728C80.9828 7.62133 81.1854 7.57867 81.3988 7.6C81.6334 7.6 81.8574 7.6 82.0708 7.6H86.4868C86.6148 7.6 86.7108 7.62133 86.7748 7.664C86.8388 7.68533 86.9134 7.71733 86.9988 7.76C87.1908 7.888 87.3081 8.10133 87.3508 8.4C87.3721 8.54933 87.3721 8.70933 87.3508 8.88C87.3508 9.05067 87.3508 9.21067 87.3508 9.36V27.728C87.3508 27.984 87.3614 28.2507 87.3828 28.528C87.4041 28.784 87.3934 29.04 87.3508 29.296ZM110.693 26.384C110.65 26.448 110.597 26.512 110.533 26.576C110.49 26.64 110.448 26.6933 110.405 26.736C110.32 26.8213 110.245 26.9067 110.181 26.992C110.117 27.0773 110.042 27.1627 109.957 27.248C109.872 27.3333 109.776 27.4187 109.669 27.504C109.584 27.5893 109.488 27.6853 109.381 27.792C109.338 27.8347 109.296 27.8667 109.253 27.888C109.253 27.9093 109.232 27.9307 109.189 27.952C109.168 27.9733 109.168 27.9733 109.189 27.952C109.104 28.08 109.05 28.1867 109.029 28.272C109.008 28.2933 108.997 28.3147 108.997 28.336C108.933 28.4853 108.869 28.6347 108.805 28.784C108.762 28.9333 108.709 29.0827 108.645 29.232C108.645 29.2747 108.634 29.3067 108.613 29.328C108.592 29.4347 108.549 29.552 108.485 29.68C108.442 29.7867 108.4 29.8933 108.357 30L108.261 30.192C108.197 30.32 108.122 30.4373 108.037 30.544C107.973 30.672 107.888 30.768 107.781 30.832C107.76 31.0667 107.781 31.3653 107.845 31.728C107.93 32.0907 107.994 32.4427 108.037 32.784C108.101 33.1253 108.112 33.4027 108.069 33.616C108.026 33.8293 107.888 33.9147 107.653 33.872C107.333 33.808 107.184 33.584 107.205 33.2C107.226 32.8373 107.29 32.4107 107.397 31.92C107.525 31.4507 107.568 31.056 107.525 30.736C107.525 30.736 107.504 30.7147 107.461 30.672C107.418 30.6293 107.397 30.608 107.397 30.608C107.397 30.5867 107.386 30.576 107.365 30.576C107.365 30.576 107.365 30.5653 107.365 30.544L107.269 30.384C107.226 30.2773 107.184 30.1813 107.141 30.096C107.098 30.0107 107.045 29.9253 106.981 29.84C106.96 29.84 106.949 29.8293 106.949 29.808L106.757 29.904H106.725C106.704 30.2027 106.682 30.4907 106.661 30.768C106.661 31.0667 106.65 31.3653 106.629 31.664C106.608 31.856 106.597 32.1227 106.597 32.464C106.597 32.8267 106.597 33.1147 106.597 33.328C106.597 33.5627 106.565 33.584 106.501 33.392C106.437 33.1573 106.394 32.9227 106.373 32.688C106.373 32.4747 106.373 32.2507 106.373 32.016C106.309 32.016 106.277 32.0053 106.277 31.984C106.256 31.8347 106.256 31.664 106.277 31.472C106.32 31.3013 106.352 31.12 106.373 30.928V30.768C106.373 30.7467 106.362 30.7573 106.341 30.8C106.32 30.8427 106.298 30.864 106.277 30.864C106.234 30.8213 106.202 30.7787 106.181 30.736C106.181 30.6933 106.17 30.6613 106.149 30.64C106.128 30.6187 106.106 30.5547 106.085 30.448C106.064 30.3413 106.032 30.2347 105.989 30.128C105.861 30.2133 105.808 30.3627 105.829 30.576C105.85 30.8107 105.893 31.056 105.957 31.312C106.021 31.5893 106.042 31.824 106.021 32.016C106.021 32.0373 106 32.048 105.957 32.048C105.936 32.0693 105.914 32.1013 105.893 32.144C105.872 32.1653 105.85 32.208 105.829 32.272C105.808 32.336 105.786 32.3467 105.765 32.304C105.744 32.0053 105.733 31.7067 105.733 31.408C105.733 31.1093 105.722 30.8213 105.701 30.544C105.637 30.7787 105.573 31.0347 105.509 31.312C105.466 31.5893 105.392 31.8453 105.285 32.08C105.264 32.144 105.232 32.208 105.189 32.272C105.146 32.3573 105.093 32.4107 105.029 32.432C104.922 32.496 104.826 32.464 104.741 32.336C104.698 32.2933 104.656 32.24 104.613 32.176C104.592 32.112 104.57 32.0693 104.549 32.048C104.4 31.856 104.229 31.664 104.037 31.472C103.866 31.28 103.717 31.0773 103.589 30.864C103.589 30.8427 103.578 30.8213 103.557 30.8C103.557 30.8 103.557 30.7893 103.557 30.768C103.536 30.768 103.525 30.7573 103.525 30.736C103.504 30.6933 103.482 30.64 103.461 30.576C103.44 30.5333 103.418 30.4907 103.397 30.448C103.354 30.5547 103.333 30.672 103.333 30.8C103.354 30.9493 103.333 31.088 103.269 31.216C103.248 31.2373 103.226 31.2053 103.205 31.12C103.184 31.056 103.162 31.0027 103.141 30.96C103.098 30.832 103.077 30.7253 103.077 30.64C103.034 30.7253 102.981 30.8107 102.917 30.896C102.874 31.0027 102.81 31.0987 102.725 31.184C102.576 31.3333 102.48 31.536 102.437 31.792C102.394 32.0693 102.384 32.3573 102.405 32.656C102.362 32.656 102.309 32.688 102.245 32.752C102.202 32.816 102.16 32.88 102.117 32.944C102.074 33.008 102.042 33.0933 102.021 33.2C102.021 32.7733 102.021 32.3787 102.021 32.016C102.042 31.6533 102.042 31.376 102.021 31.184C101.914 31.0987 101.808 30.992 101.701 30.864C101.616 30.7573 101.541 30.672 101.477 30.608C101.456 30.5653 101.413 30.512 101.349 30.448C101.328 30.448 101.296 30.4267 101.253 30.384C101.168 30.3413 101.114 30.3733 101.093 30.48C101.072 30.672 101.061 30.864 101.061 31.056C101.061 31.2693 101.04 31.472 100.997 31.664C100.976 31.7067 100.954 31.6747 100.933 31.568C100.933 31.4613 100.922 31.3867 100.901 31.344L100.805 30.32H100.773C98.6397 30.2773 96.7943 29.9253 95.237 29.264C93.6797 28.5813 92.485 27.5787 91.653 26.256C91.525 26.0853 91.4077 25.904 91.301 25.712C91.2157 25.4987 91.1303 25.2853 91.045 25.072C90.981 24.944 90.9277 24.816 90.885 24.688C90.8423 24.56 90.7997 24.432 90.757 24.304C90.6717 24.176 90.597 23.952 90.533 23.632C90.4263 23.2907 90.3517 22.864 90.309 22.352C90.2663 21.84 90.245 21.328 90.245 20.816C90.245 20.2827 90.245 19.856 90.245 19.536C90.245 19.344 90.245 19.152 90.245 18.96C90.245 18.768 90.2557 18.576 90.277 18.384V17.104C90.277 16.6773 90.277 16.24 90.277 15.792C90.2983 15.3227 90.3517 14.8853 90.437 14.48C90.629 13.3067 91.013 12.272 91.589 11.376L91.781 11.056C91.8023 11.0347 91.813 11.0133 91.813 10.992C91.8343 10.9707 91.8557 10.9493 91.877 10.928C91.9197 10.864 91.9623 10.8 92.005 10.736C92.069 10.672 92.1223 10.6187 92.165 10.576C93.0823 9.50933 94.277 8.69867 95.749 8.144C97.2423 7.58933 98.9383 7.30133 100.837 7.28H101.253C101.445 7.28 101.648 7.28 101.861 7.28C102.074 7.28 102.256 7.29067 102.405 7.312C102.469 7.312 102.533 7.32267 102.597 7.344C102.661 7.344 102.725 7.344 102.789 7.344L103.429 7.408C103.536 7.42933 103.642 7.45067 103.749 7.472C103.856 7.472 103.952 7.48267 104.037 7.504C104.528 7.568 105.008 7.664 105.477 7.792C105.498 7.792 105.509 7.80267 105.509 7.824C106.682 8.12267 107.696 8.53867 108.549 9.072C109.424 9.584 110.149 10.1813 110.725 10.864C110.832 10.992 110.938 11.1307 111.045 11.28C111.152 11.408 111.248 11.5573 111.333 11.728C111.333 11.7493 111.354 11.7813 111.397 11.824C111.44 11.9093 111.482 12.0053 111.525 12.112C111.589 12.2187 111.642 12.3253 111.685 12.432C111.877 12.88 112.005 13.3493 112.069 13.84V14C112.09 14.064 112.101 14.128 112.101 14.192C112.101 14.256 112.101 14.32 112.101 14.384V14.576C112.101 14.6187 112.08 14.6613 112.037 14.704C112.037 14.704 112.026 14.7147 112.005 14.736C112.005 14.736 112.005 14.7467 112.005 14.768C112.005 14.768 111.984 14.7893 111.941 14.832C111.984 14.832 111.994 14.8427 111.973 14.864C111.952 14.864 111.909 14.896 111.845 14.96C111.824 14.9813 111.802 15.0133 111.781 15.056C111.76 15.0773 111.738 15.1093 111.717 15.152C111.696 15.1733 111.685 15.1947 111.685 15.216C111.685 15.2373 111.674 15.2587 111.653 15.28C111.632 15.3013 111.61 15.344 111.589 15.408C111.589 15.472 111.568 15.4933 111.525 15.472C111.482 15.472 111.461 15.4507 111.461 15.408C111.461 15.344 111.45 15.2907 111.429 15.248C111.408 15.248 111.397 15.248 111.397 15.248C111.397 15.2267 111.397 15.216 111.397 15.216C111.376 15.1947 111.344 15.1947 111.301 15.216C111.28 15.2373 111.248 15.2587 111.205 15.28C111.162 15.3227 111.141 15.344 111.141 15.344C111.12 15.3653 111.077 15.376 111.013 15.376C110.97 15.376 110.928 15.3867 110.885 15.408C110.736 15.4507 110.576 15.504 110.405 15.568C110.256 15.632 110.096 15.6533 109.925 15.632C109.776 15.632 109.637 15.6107 109.509 15.568C109.402 15.504 109.274 15.4613 109.125 15.44C109.018 15.3973 108.901 15.3867 108.773 15.408C108.666 15.4293 108.549 15.44 108.421 15.44C108.378 15.44 108.336 15.44 108.293 15.44C108.25 15.4187 108.208 15.408 108.165 15.408C108.058 15.4293 107.952 15.4933 107.845 15.6C107.76 15.6853 107.674 15.76 107.589 15.824C107.504 15.888 107.408 15.9307 107.301 15.952C107.194 15.9733 107.088 16.0053 106.981 16.048C106.874 16.112 106.778 16.1973 106.693 16.304C106.608 16.3893 106.512 16.4533 106.405 16.496H111.237C111.408 16.496 111.578 16.5493 111.749 16.656L111.941 16.848C112.048 16.9973 112.101 17.168 112.101 17.36C112.101 17.5307 112.101 17.7013 112.101 17.872V19.76C112.101 20.144 112.101 20.528 112.101 20.912C112.122 21.296 112.122 21.68 112.101 22.064C112.08 22.5973 112.016 23.0987 111.909 23.568C111.802 24.016 111.664 24.4533 111.493 24.88L111.205 25.52C111.12 25.6693 111.034 25.8187 110.949 25.968C110.885 26.1173 110.8 26.256 110.693 26.384ZM101.125 24.08H101.221C101.648 24.08 102.074 24.016 102.501 23.888C102.949 23.7387 103.301 23.4933 103.557 23.152C103.664 22.9813 103.738 22.8213 103.781 22.672C103.845 22.5013 103.888 22.3413 103.909 22.192C103.909 22.1707 103.909 22.1387 103.909 22.096C103.93 22.0533 103.941 22.0107 103.941 21.968L103.845 21.776C103.781 21.7973 103.728 21.8507 103.685 21.936C103.642 22.0213 103.6 22.0853 103.557 22.128C103.493 22.2133 103.418 22.288 103.333 22.352C103.269 22.416 103.194 22.48 103.109 22.544C103.066 22.5653 103.024 22.5867 102.981 22.608C102.938 22.608 102.896 22.608 102.853 22.608C102.704 22.6507 102.565 22.608 102.437 22.48L102.277 22.32C102.192 22.2133 102.128 22.096 102.085 21.968C102.042 21.84 101.989 21.7227 101.925 21.616V21.584C101.818 21.52 101.722 21.4133 101.637 21.264C101.637 21.2427 101.626 21.232 101.605 21.232C101.605 21.2107 101.605 21.1893 101.605 21.168C101.605 21.1467 101.594 21.1253 101.573 21.104C101.573 21.0827 101.573 21.0613 101.573 21.04V21.008C101.552 20.8587 101.541 20.7093 101.541 20.56C101.562 20.4107 101.573 20.272 101.573 20.144V18.512C101.573 18.32 101.562 18.1173 101.541 17.904C101.52 17.6693 101.53 17.456 101.573 17.264C101.616 17.072 101.669 16.9333 101.733 16.848C101.776 16.8053 101.797 16.784 101.797 16.784C101.968 16.592 102.181 16.496 102.437 16.496H105.861C105.754 16.4533 105.648 16.4 105.541 16.336C105.434 16.272 105.338 16.2187 105.253 16.176C104.976 16.0053 104.698 15.856 104.421 15.728C104.144 15.5787 103.898 15.376 103.685 15.12L103.493 14.896C103.472 14.8747 103.45 14.8533 103.429 14.832C103.429 14.8107 103.418 14.7893 103.397 14.768L103.301 14.672C103.237 14.5867 103.173 14.5013 103.109 14.416C103.045 14.3307 102.97 14.2453 102.885 14.16L102.693 14L102.469 14.224C102.448 14.2027 102.437 14.1707 102.437 14.128C102.373 14.1493 102.309 14.1707 102.245 14.192C102.202 14.192 102.16 14.1707 102.117 14.128C102.138 14.2773 102.149 14.4373 102.149 14.608C102.17 14.7787 102.117 14.864 101.989 14.864C101.84 14.864 101.786 14.736 101.829 14.48C101.893 14.224 101.904 14.0213 101.861 13.872C101.861 13.8507 101.84 13.84 101.797 13.84C101.776 13.8187 101.754 13.8293 101.733 13.872C101.712 14.0213 101.701 14.192 101.701 14.384C101.701 14.5547 101.669 14.7253 101.605 14.896C101.584 14.9173 101.562 14.896 101.541 14.832C101.52 14.768 101.498 14.7147 101.477 14.672L101.349 14.352C101.328 14.288 101.306 14.224 101.285 14.16C101.264 14.0747 101.242 13.9893 101.221 13.904C101.157 13.968 101.093 14.0213 101.029 14.064C100.986 14.1067 100.912 14.1387 100.805 14.16C100.784 14.1813 100.73 14.2027 100.645 14.224C100.56 14.224 100.496 14.2133 100.453 14.192C100.453 14.192 100.442 14.192 100.421 14.192C100.421 14.192 100.421 14.1813 100.421 14.16C100.378 14.1173 100.357 14.0747 100.357 14.032C100.357 13.9893 100.346 13.9573 100.325 13.936C100.325 13.8933 100.325 13.8613 100.325 13.84C100.24 13.84 100.165 13.8507 100.101 13.872C100.016 14.0213 99.9837 14.1173 100.005 14.16C100.048 14.1813 100.005 14.2667 99.877 14.416C99.749 14.5653 99.6423 14.5547 99.557 14.384C99.493 14.2133 99.4183 14.1173 99.333 14.096C99.333 14.096 99.301 14.128 99.237 14.192L99.205 14.224L99.045 14.416C99.0237 14.4373 99.013 14.4587 99.013 14.48C99.013 14.5013 99.0023 14.5227 98.981 14.544C98.8317 14.8213 98.7357 15.12 98.693 15.44C98.6503 15.7387 98.629 16.0373 98.629 16.336C98.629 16.4427 98.6183 16.5813 98.597 16.752C98.597 16.9013 98.597 17.0613 98.597 17.232V19.92C98.597 20.1333 98.597 20.336 98.597 20.528C98.597 20.6987 98.6077 20.848 98.629 20.976C98.629 21.1253 98.629 21.2747 98.629 21.424C98.629 21.552 98.6397 21.6907 98.661 21.84C98.7037 22.0533 98.757 22.2773 98.821 22.512C98.885 22.7253 98.981 22.928 99.109 23.12C99.2797 23.3973 99.5037 23.6107 99.781 23.76C100.058 23.9093 100.346 24.0053 100.645 24.048C100.73 24.048 100.805 24.0587 100.869 24.08C100.954 24.08 101.04 24.08 101.125 24.08ZM102.405 32.656C102.49 32.6773 102.544 32.8053 102.565 33.04C102.586 33.2747 102.586 33.5413 102.565 33.84C102.544 33.6267 102.512 33.424 102.469 33.232C102.448 33.04 102.426 32.848 102.405 32.656ZM102.117 36.464C102.16 36.6773 102.16 36.688 102.117 36.496C102.074 36.3253 102.021 36.0373 101.957 35.632C101.914 35.248 101.882 34.8213 101.861 34.352C101.861 33.904 101.914 33.52 102.021 33.2C102 33.84 101.989 34.4693 101.989 35.088C101.989 35.7067 102.032 36.1653 102.117 36.464ZM102.373 36.208C102.33 36.4 102.32 36.3787 102.341 36.144C102.384 35.9093 102.426 35.568 102.469 35.12C102.533 34.672 102.565 34.2453 102.565 33.84C102.65 34.3093 102.693 34.7573 102.693 35.184C102.714 35.632 102.608 35.9733 102.373 36.208Z" fill="#15C196"/>
        <path d="M119 6.5L135 19.5L119 32.5" stroke="#48484B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_41_1183">
          <rect width="135" height="38.5" fill="white" transform="translate(0 0.25)"/>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Logo;
