import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import * as React from 'react';
import { SyntheticEvent, useState } from 'react';
import { useTheme } from 'styled-components';
import { v4 as uuid } from 'uuid';
import { api } from '../../../services/api';
import { storage } from '../../../services/firebase';
import { MediaPost, NewPost } from '../NewPost';
import { Post } from '../Post';
import { PostProps } from '../Post/types';
import { Container } from './styles';
import { NewPostModalType, PostType, TabPanelProps } from './types';

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



export function Timeline() {
    const [value, setValue] = useState<PostType>(PostType.NOTICIAS);
    const [posts, setPosts] = useState<PostProps[]>([{}] as PostProps[]);

    const theme = useTheme();

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
        handlePostType(newValue)
    };

    const handlePostType = (postType: PostType) => {
        // setPosts(() => posts.filter(old => old.postType === postType.valueOf()))
    }

    const handleCreatePost = async (postContent: PostProps) => {
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

        await api.post<PostProps>('post/create', {
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
                        posts.map((post) => <Post key={post.postId} postData={post} />)
                    }
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <NewPost handleCreatePost={handleCreatePost} postType={PostType.ESTABELECIMENTOS} modalType={NewPostModalType.DEFAULT} />
                    {
                        posts.map((post) => <Post key={post.postId} postData={post} />)
                    }
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <NewPost handleCreatePost={handleCreatePost} postType={PostType.SEGURANCA} modalType={NewPostModalType.DEFAULT} />
                    {
                        posts.map((post) => <Post key={post.postId} postData={post} />)
                    }
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <NewPost handleCreatePost={handleCreatePost} postType={PostType.CASAS} modalType={NewPostModalType.HOME} />
                    {
                        posts.map((post) => <Post key={post.postId} postData={post} />)
                    }
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <NewPost handleCreatePost={handleCreatePost} postType={PostType.EVENTOS} modalType={NewPostModalType.DEFAULT} />
                    {
                        posts.map((post) => <Post key={post.postId} postData={post} />)
                    }
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <NewPost handleCreatePost={handleCreatePost} postType={PostType.DOACOES} modalType={NewPostModalType.DONATIONS} />
                    {
                        posts.map((post) => <Post key={post.postId} postData={post} />)
                    }
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <NewPost handleCreatePost={handleCreatePost} postType={PostType.DESAPARECIDOS} modalType={NewPostModalType.DEFAULT} />
                    {
                        posts.map((post) => <Post key={post.postId} postData={post} />)
                    }
                </TabPanel>
            </Box>
        </Container>
    );
}