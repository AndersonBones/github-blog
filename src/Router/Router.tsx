import { Routes, Route } from "react-router-dom"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { Home } from "../pages/home/Home"
import { PostPage } from "../pages/post/PostPage"

export const Router = ()=>{
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout></DefaultLayout>}>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/posts/:id" element={<PostPage></PostPage>}></Route>
            </Route>
        </Routes>
    )
}