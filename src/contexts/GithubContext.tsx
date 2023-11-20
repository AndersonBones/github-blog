import { ReactNode, createContext, useEffect, useState, useCallback } from "react";
import { api } from "../libs/axios";
import { formatDistanceToNow } from "date-fns"
import ptBR from 'date-fns/locale/pt-BR'


interface User{
    avatar_url:string,
    login:string,
    followers:number,
    blog:string,
    bio:string
}

export interface Issues{
    number:number,
    title:string,
    body:string,
    comments_url:string,
    created_at:string
    
}

interface IssuesPost{
    title:string,
    body:string,
    comments_url:string,
    created_at:string,
    login:string
    comments:number
}

interface GithubContextType{
    issues:Issues[]
    user:User
    handleSearch:(value:string)=>void
    issuesId:IssuesPost
    getIssuesId:(id:number)=>void
    isLoading:boolean
    setLoadingPost:(value:boolean)=>void
}

interface GithubContextProviderProps{
    children:ReactNode
}

export const GithubContext = createContext({} as GithubContextType)

export const GithubContextProvider = ({children}:GithubContextProviderProps)=>{

    const [isLoading, setIsLoading] = useState(true);
    const [issues, setIssues] = useState<Issues[]>([])
    const [user, setUser] = useState({} as User);
    const [filter, setFilter] = useState("");
    const [issuesId, setIssuesId] = useState<IssuesPost>({
        body:"",
        comments_url:"",
        created_at:"",
        login:"",
        title:"",
        comments:0
    })

    const getIssues = async () => {

        try {
            
            setIsLoading(true)
            const response = await api.get('repos/AndersonBones/github-blog/issues',{
                params:{
                    _sort:"created_at"
                }
            });
            type IssuesType = typeof response.data[0] 
            const bodyList = [] as Issues[]
    
            response.data.map((item:IssuesType)=>{
                
                bodyList.push({
                    number:item.number,
                    title:item.title,
                    body:item.body,
                    comments_url:item.comments_url,
                    created_at:item.created_at
                })
            })  
           
            setIssues(bodyList)
        } catch (error) {
            console.log(error)
            
        }
        finally{
            setIsLoading(false);
        }
        
    }

    const getUserData =async () => {
        try {
            setIsLoading(true)
            const response = await api.get('users/AndersonBones')
            setUser(response.data)
           
        } catch (error) {
            console.log(error)
            
        }finally{
            setIsLoading(false);
        }
       
        
    }

    const handleSearch = (value:string)=>{
        setFilter(value)
    }

    const getIssuesId = useCallback(async (id:number) => {
        try {
            setIsLoading(true)
            const {data} = await api.get(`repos/AndersonBones/github-blog/issues/${id}`)
           
            setIssuesId({
                body:data.body,
                comments_url:data.comments_url,
                created_at:formatDistanceToNow(new Date(data.created_at),{
                    addSuffix:true,
                    locale:ptBR
                }),
                login:data.user.login,
                title:data.title,
                comments:data.comments
            })

            
        } catch (error) {
            console.log(error)
            
        }finally{
            setIsLoading(false);
        }
        
    }, [issuesId]);

    const filteredList = issues.filter(item=>item.body.includes(filter))
    
    const setLoadingPost = (value:boolean)=>{
        setIsLoading(value)
    }

    

    useEffect(()=>{
        
        getUserData();
        getIssues();

    },[])

    return (
        <GithubContext.Provider
            value={{
                issues:filteredList,
                user:{
                    avatar_url:user.avatar_url,
                    login:user.login,
                    followers:user.followers,
                    blog:user.blog,
                    bio:user.bio
                },
                handleSearch,
                issuesId,
                getIssuesId,
                isLoading,
                setLoadingPost
            }}
            >
            {children}
        </GithubContext.Provider>
    )
}