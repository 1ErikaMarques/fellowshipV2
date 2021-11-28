import { SyntheticEvent, useEffect, useState } from 'react';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { api } from '../../../services/api';
import { MediaPost, NewPost } from '../NewPost';
import { Timeline } from '../Timeline';
import { Container } from './styles';
import { useTheme } from 'styled-components';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../services/firebase';
import { v4 as uuid } from 'uuid';

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
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <Container>
                    <Box sx={{ p: 0 }}>
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
    tag?: string;
    propertyType?: string;
    propertyPrice?: number;
}

export function MenuNav() {
    const [value, setValue] = useState<PostType>(PostType.NOTICIAS);
    const [posts, setPosts] = useState<Post[]>([{}] as Post[]);

    const theme = useTheme();

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
        handlePostType(newValue)
    };

    const handlePostType = (postType: PostType) => {
        // setPosts(() => posts.filter(old => old.postType === postType.valueOf()))
    }

    const handleCreatePost = async (postContent: Post) => {
        let mediaPost: MediaPost[] = [];

        if (postContent.mediaPosts) {

            for (let index = 0; index < postContent.mediaPosts.length; index++) {
                //alocando url temporaria e mediatype
                const element = postContent.mediaPosts[index];
                //buscando url temporaria
                await fetch(element.mediaUrl)
                    //convertendo url temporaria para arquivo
                    .then(response => {
                        URL.revokeObjectURL(element.mediaUrl);//tira da memoria a url temporaria                        
                        return response.blob()//sera retornado para o prox bloco
                    })
                    .then(async (file) => { //elemento convertido para arquivo
                        //cria referencia do firebase
                        const storagePostsRef = ref(storage, uuid());
                        //carrega para o firebase
                        await uploadBytes(storagePostsRef, file)
                            .then(async () => {
                                //busca a url do firebase
                                await getDownloadURL(storagePostsRef)
                                    //alocando url dentro do array, para cada uma gera uma urlPublica e um mediaType(que ja vem da modal)
                                    .then((urlPublica) => {
                                        mediaPost.push({
                                            mediaUrl: urlPublica,
                                            mediaType: element.mediaType
                                        })
                                    })
                            });
                    })
            }
        }

        await api.post<Post>('post/create', {
            userId: postContent.userId,
            text: postContent.text,
            name: postContent.name,
            createdAt: postContent.createdAt,
            postLocalization: postContent.postLocalization,
            postType: postContent.postType,
            mediaPosts: mediaPost,
            profilePic: postContent.profilePic
        }).then(response =>
            setPosts([...posts,
            {
                userId: response.data.userId,
                text: response.data.text,
                name: response.data.name,
                createdAt: response.data.createdAt,
                postLocalization: response.data.postLocalization,
                postType: response.data.postType,
                mediaPosts: response.data.mediaPosts,
                profilePic: response.data.profilePic,
                postId: response.data.postId,
                tag: response.data.tag,
                propertyType: response.data.propertyType,
                propertyPrice: response.data.propertyPrice
            },
            ])
        );
    }


    return (
        <Container>
            <Box
                sx={{ maxWidth: 625, bgcolor: theme.colors.shape, boxShadow: '0 10px 70px rgb(0 0 0 / 5%)', height: 48 }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    TabIndicatorProps={{ style: { background: theme.colors.primary } }}
                    textColor="primary">
                    <Tab label="Noticias" {...a11yProps(PostType.NOTICIAS)} />
                    <Tab label="Estabelecimentos" {...a11yProps(PostType.ESTABELECIMENTOS)} />
                    <Tab label="Segurança" {...a11yProps(PostType.SEGURANCA)} />
                    <Tab label="Casas" {...a11yProps(PostType.CASAS)} />
                    <Tab label="Eventos" {...a11yProps(PostType.EVENTOS)} />
                    <Tab label="Doações" {...a11yProps(PostType.DOACOES)} />
                    <Tab label="Desaparecidos" {...a11yProps(PostType.DESAPARECIDOS)} />
                </Tabs>

                <TabPanel value={value} index={0}>
                    <NewPost handleCreatePost={handleCreatePost} postType={PostType.NOTICIAS} modalType={NewPostModalType.DEFAULT} />
                    {
                        posts.map((post) => <Timeline key={post.postId} post={post} />)
                    }
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <NewPost handleCreatePost={handleCreatePost} postType={PostType.ESTABELECIMENTOS} modalType={NewPostModalType.DEFAULT} />
                    {
                        posts.map((post) => <Timeline key={post.postId} post={post} />)
                    }
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <NewPost handleCreatePost={handleCreatePost} postType={PostType.SEGURANCA} modalType={NewPostModalType.DEFAULT} />
                    {
                        posts.map((post) => <Timeline key={post.postId} post={post} />)
                    }
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <NewPost handleCreatePost={handleCreatePost} postType={PostType.CASAS} modalType={NewPostModalType.HOME} />
                    {
                        posts.map((post) => <Timeline key={post.postId} post={post} />)
                    }
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <NewPost handleCreatePost={handleCreatePost} postType={PostType.EVENTOS} modalType={NewPostModalType.DEFAULT} />
                    {
                        posts.map((post) => <Timeline key={post.postId} post={post} />)
                    }
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <NewPost handleCreatePost={handleCreatePost} postType={PostType.DOACOES} modalType={NewPostModalType.DONATIONS} />
                    {
                        posts.map((post) => <Timeline key={post.postId} post={post} />)
                    }
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <NewPost handleCreatePost={handleCreatePost} postType={PostType.DESAPARECIDOS} modalType={NewPostModalType.DEFAULT} />
                    {
                        posts.map((post) => <Timeline key={post.postId} post={post} />)
                    }
                </TabPanel>
            </Box>
        </Container>
    );
}