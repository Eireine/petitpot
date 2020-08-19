import React from 'react'
import ArticlePreview from './index'

export default {
    title : "ArticlePreview",
    component : ArticlePreview
}

const article1 = {
    title: "Dumbo et bulles",
    image: "/images/dumbo.jpg",
    date: "12 juillet 2020",
    tag: "💙 MUM AND KID",
    link: "#",
    description: `
    Maecenas vit iae tellus blandit, pellentesque felis non, rutrum ligula. Mauris vulputate consectetur gravida. Maecenas vitae tellus blandit.`
} 

const article2 = {
    title: "Mon super titre",
    image: "/images/kiwi.jpg",
    date: "31 décembre 2020",
    link: "#",
    description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet pulvinar enim. Proin erat lorem, blandit sed fringilla sit amet, eleifend non neque. Maecenas gravida interdum orci quis lacinia. Morbi eget dui laoreet, lobortis ante at, gravida magna. Fusce congue urna eget sodales porttitor. Fusce ullamcorper pellentesque pellentesque. Sed sit amet tristique orci.
    Sed vestibulum ex ante, vitae porttitor magna porttitor nec. Duis elementum, nisi ac semper venenatis, lectus nunc finibus erat, eu pellentesque nunc felis ac nisi. Proin porttitor massa diam, et sagittis elit rutrum quis. Donec sit amet placerat risus. Proin tempus, velit ut scelerisque gravida, purus urna feugiat augue, bibendum convallis enim tellus at orci. Maecenas nulla purus, interdum et metus in, vestibulum convallis turpis. Aenean ornare pharetra turpis eu vehicula. Etiam ut dignissim eros. Curabitur scelerisque luctus cursus. Donec hendrerit purus felis, et auctor velit vulputate nec.
    Nulla venenatis ultricies tincidunt. Aliquam nec neque luctus, gravida ipsum sed, placerat eros. In venenatis dignissim arcu. Proin libero ipsum, consequat ac auctor nec, congue fermentum quam. Aenean aliquam tellus id libero fringilla finibus. Ut imperdiet faucibus mi id rutrum. Suspendisse at velit a nulla ultricies pulvinar. Sed accumsan leo quis arcu scelerisque volutpat. Quisque sed velit purus. Donec ut mauris et nulla viverra consectetur a nec dui. Quisque sodales ornare massa, a fermentum nisi interdum ut. Nulla pretium pulvinar nibh, ut consequat est dapibus et. Integer pulvinar cursus faucibus.
    Aliquam fermentum vehicula ante a gravida. Mauris imperdiet tellus quis mauris facilisis, nec tincidunt enim viverra. Nulla vitae pharetra quam. Duis fringilla dui a purus congue, a bibendum enim condimentum. Aenean a diam semper, suscipit tellus in, bibendum est. Donec egestas elit fermentum diam fermentum, a facilisis sem auctor. Curabitur ullamcorper risus a ipsum bibendum fringilla. Maecenas ac turpis et augue semper vulputate non in nisi.`
} 

const mainArticleData = {
    title: "Escapade sous-marine à Nausicaa",
    image: "/images/fish.jpg",
    date: "12 juillet 2020",
    tag: "🐚 PRENDRE L'AIR",
    link: "#",
    description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet pulvinar enim. Proin erat lorem, blandit sed fringilla sit amet, eleifend non neque. Maecenas gravida interdum orci quis lacinia. Morbi eget dui laoreet, lobortis ante at, gravida magna. Fusce congue urna eget sodales porttitor. Fusce ullamcorper pellentesque pellentesque. Sed sit amet tristique orci.`
} 

export const basicArticle = () => <ArticlePreview isHover = {true} {...article1} /> 

export const veryLongDescription = () => <ArticlePreview {...article2} />

export const mainArticle = () => <ArticlePreview isMain={true} {...mainArticleData} />
