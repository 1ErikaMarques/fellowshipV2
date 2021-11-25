import {SyntheticEvent, useEffect, useState} from 'react';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {api} from '../../../services/api';
import {MediaPost, NewPost} from '../NewPost';
import {Timeline} from '../Timeline';
import {Container} from './styles';
import {useTheme} from 'styled-components';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import {storage} from '../../../services/firebase';
import {v4 as uuid} from 'uuid';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export enum NewPostModalType {
    DEFAULT,
    HOME,
    DONATIONS
}

export enum PostType {
    NOTICIAS,
    ESTABELECIMENTOS,
    SEGURANCA,
    CASAS,
    EVENTOS,
    DOACOES,
    DESAPARECIDOS
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <Container>
                    <Box sx={{p: 0}}>
                        {children}
                    </Box>
                </Container>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

interface Comments {
    commentId?: string;
    postId?: string;
    userId: string;
    text: string;
    createdAt?: number;
}

export interface Post {
    postId?: string;
    userId: string | undefined;
    name: string;
    profilePic?: string;
    text: string;
    createdAt: number;
    postLocalization: string;
    postType: PostType;
    comments?: Comments[];
    mediaPosts?: MediaPost[];
}

export function MenuNav() {
    const [value, setValue] = useState<PostType> (PostType.NOTICIAS);
    const [posts, setPosts] = useState<Post[]> ([{}] as Post[]);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue (newValue);
        handlePostType(newValue)
    };

    const handlePostType = (postType : PostType) => {
       // setPosts(() => posts.filter(old => old.postType === postType.valueOf()))
    }

    const handleCreatePost = async (postContent: Post) => {
        console.log (postContent);

        if (postContent.mediaPosts && postContent.mediaPosts.length > 0) {
            /* const file = await fetch (postContent.mediaPosts[1].mediaUrl).then (r => r.blob ());
             const storagePostsRef = ref (storage, uuid());
             uploadBytes (storagePostsRef, file).then (async () => {
                 const publicImageUrl = await getDownloadURL (storagePostsRef);
                 console.log (`Uploaded a blob or file! , ${publicImageUrl}`);
             });*/

            await api.post<Post> ('post/create', {
                userId: postContent.userId,
                text: postContent.text,
                name: postContent.name,
                createdAt: postContent.createdAt,
                postLocalization: postContent.postLocalization,
                postType: postContent.postType,
                mediaPosts: postContent.mediaPosts,
                profilePic: postContent.profilePic
            }).then( res => console.log(res));
        }

           /* setPosts ([...posts,
                {
                    userId: postContent.userId,
                    text: postContent.text,
                    name: postContent.name,
                    createdAt: postContent.createdAt,
                    postLocalization: postContent.postLocalization,
                    postType: postContent.postType,
                    mediaPosts: postContent.mediaPosts,
                    profilePic:postContent.profilePic
                },
            ]);
        } else{
            setPosts ([...posts,
                {
                    userId: postContent.userId,
                    text: postContent.text,
                    name: postContent.name,
                    createdAt: postContent.createdAt,
                    postLocalization: postContent.postLocalization,
                    postType: postContent.postType,
                    profilePic:postContent.profilePic
                },
            ]);
        }*/
    };

    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const theme = useTheme ();

    useEffect (() => {
        setPosts ([
            {
                userId: 'SHUSAHSUAHS',
                text: 'TESTEEEE',
                name: 'Juazin',
                createdAt: 0o00000,
                postLocalization: '04348040',
                postType: PostType.NOTICIAS,
                mediaPosts: [
                    {
                        mediaType: 'image',
                        mediaUrl:
                            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
                    },
                    {
                        mediaType: 'image',
                        mediaUrl:
                            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
                    },
                    {
                        mediaType: 'image',
                        mediaUrl:
                            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
                    },
                    {
                        mediaType: 'image',
                        mediaUrl:
                            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
                    }]
            },
            {
                userId: 'DSDAS',
                text: 'aLOOOOOOOO ELZINHAAA',
                name: 'ELZINHAAAAA',
                createdAt: 0o00000,
                postLocalization: '04348040',
                postType: PostType.NOTICIAS,
               /* mediaPosts: [
                    {
                        mediaType: 'image',
                        mediaUrl:
                            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
                    },
                    {
                        mediaType: 'image',
                        mediaUrl:
                            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
                    },
                    {
                        mediaType: 'image',
                        mediaUrl:
                            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
                    },
                    {
                        mediaType: 'image',
                        mediaUrl:
                            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
                    }]*/
            }
        ]);
    }, []);

    return (
        <Container>
            <Box
                sx={{maxWidth: 625, bgcolor: theme.colors.shape, boxShadow: '0 10px 70px rgb(0 0 0 / 5%)', height: 48}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    TabIndicatorProps={{style: {background: theme.colors.primary}}}
                    textColor="primary">
                    <Tab label="Noticias" {...a11yProps (PostType.NOTICIAS)} />
                    <Tab label="Estabelecimentos" {...a11yProps (PostType.ESTABELECIMENTOS)} />
                    <Tab label="Segurança" {...a11yProps (PostType.SEGURANCA)} />
                    <Tab label="Casas" {...a11yProps (PostType.CASAS)} />
                    <Tab label="Eventos" {...a11yProps (PostType.EVENTOS)} />
                    <Tab label="Doações" {...a11yProps (PostType.DOACOES)} />
                    <Tab label="Desaparecidos" {...a11yProps (PostType.DESAPARECIDOS)} />
                </Tabs>

                <TabPanel value={value} index={0}>
                    <NewPost handleCreatePost={handleCreatePost} postType={PostType.NOTICIAS} modalType={NewPostModalType.DEFAULT}/>
                    {
                        posts.map ((post) => <Timeline key={post.postId} post={post}/>)
                    }
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <NewPost handleCreatePost={handleCreatePost} postType={PostType.ESTABELECIMENTOS} modalType={NewPostModalType.DEFAULT}/>
                    {
                        posts.map ((post) => <Timeline key={post.postId} post={post}/>)
                    }
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <NewPost handleCreatePost={handleCreatePost} postType={PostType.SEGURANCA} modalType={NewPostModalType.DEFAULT}/>
                    {
                        posts.map ((post) => <Timeline key={post.postId} post={post}/>)
                    }
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <NewPost handleCreatePost={handleCreatePost} postType={PostType.CASAS} modalType={NewPostModalType.HOME}/>
                    {
                        posts.map ((post) => <Timeline key={post.postId} post={post}/>)
                    }
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <NewPost handleCreatePost={handleCreatePost} postType={PostType.EVENTOS} modalType={NewPostModalType.DEFAULT}/>
                    {
                        posts.map ((post) => <Timeline key={post.postId} post={post}/>)
                    }
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <NewPost handleCreatePost={handleCreatePost} postType={PostType.DOACOES} modalType={NewPostModalType.DONATIONS}/>
                    {
                        posts.map ((post) => <Timeline key={post.postId} post={post}/>)
                    }
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <NewPost handleCreatePost={handleCreatePost} postType={PostType.DESAPARECIDOS} modalType={NewPostModalType.DEFAULT}/>
                    {
                        posts.map ((post) => <Timeline key={post.postId} post={post}/>)
                    }
                </TabPanel>
            </Box>
        </Container>
    );
}