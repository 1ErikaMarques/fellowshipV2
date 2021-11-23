import React, { useState } from 'react';
import { Avatar } from '@mui/material';

import { ModalDefault } from '../../../components/ModalDefault';
import { ModalHome } from '../../../components/ModalHome';
import { ModalDonations } from '../../../components/ModalDonations';

import { NewPostModalType, PostType } from '../MenuNav';
import { Container, ButtonPub, } from './styles';

import {ref, uploadBytes,getDownloadURL} from 'firebase/storage';
import {storage} from "../../../services/firebase";


interface NewPostProps {
    modalType: NewPostModalType;
    postType: PostType;
}

export interface MediaPost {
    mediaUrl?: string;
    temporaryUrl : string;
    mediaType:string;
}

export function NewPost({ modalType, postType }: NewPostProps) {

    const [isOpenModalDefault, setIsOpenModalDefault] = React.useState(false);
    const handleOpenModalDefault = () => setIsOpenModalDefault(true);
    const handleCloseModalDefault = () => setIsOpenModalDefault(false);

    const [isOpenModalHome, setIsOpenModalHome] = React.useState(false);
    const handleIsOpenModalHome = () => setIsOpenModalHome(true);
    const handleCloseModalHome = () => setIsOpenModalHome(false);

    const [isOpenModalDonations, setIsOpenModalDonations] = React.useState(false);
    const handleOpenModalDonations = () => setIsOpenModalDonations(true);
    const handleCloseModalDonations = () => setIsOpenModalDonations(false);

    const [isMediaSelected, setIsMediaSelected] = useState(false);
    const [mediaPost, setMediaPost] = useState<MediaPost[]>([]);

    const handleAddPhotoPost = async (file : React.ChangeEvent<HTMLInputElement>) => {

        let newArray : MediaPost[] = [...mediaPost];


        // --> [1,2,3,4]
        const files = file.target.files;
        if(files !== null){
            for (let i = 0; i < files.length; i++) {
               const newMedia : MediaPost = {
                   temporaryUrl : (window.URL ? URL : webkitURL).createObjectURL (files[i]),
                   mediaType:'image'
               }
                newArray.push(newMedia)
            }
            //const temporaryUrl = URL.createObjectURL(file);
        }



        //const file = await fetch (arrayPost[1].mediaUrl).then (r => r.blob ());

        /*const storagePostsRef = ref(storage, 'posts');
        uploadBytes (storagePostsRef, file).then (async () => {
            const publicImageUrl = await getDownloadURL(storagePostsRef);
            console.log (`Uploaded a blob or file! , ${publicImageUrl}`);
        });*/

        setMediaPost (() => [...newArray]);
        setIsMediaSelected (true)
    };

    const handleAddVideoPost = () => {
    };

    const handleRemoveMedia = (temporaryUrl: string) => {
        setMediaPost(old => old.filter(
            media => media.temporaryUrl !== temporaryUrl
        ));
        URL.revokeObjectURL(temporaryUrl)
        if (mediaPost.length < 1) {
            setIsMediaSelected(false)
        }
    };

    return (
        <Container>
            <Avatar sx={{
                width: '3rem',
                height: '3rem',
                marginLeft: '1.5rem',
                marginRight: '1rem'
            }}
            />

            {(modalType === NewPostModalType.DEFAULT &&
                <>
                    <ButtonPub onClick={handleOpenModalDefault}>Começar publicação</ButtonPub>

                    <ModalDefault
                        isOpen={isOpenModalDefault}
                        handleClose={handleCloseModalDefault}
                        handleAddPhotoPost={ (event: React.ChangeEvent<HTMLInputElement>) => handleAddPhotoPost(event)}
                        handleAddVideoPost={handleAddVideoPost}
                        handleRemoveMedia={handleRemoveMedia}
                        mediaPost={mediaPost}
                        isMediaSelected={isMediaSelected}
                    />
                </>

            ) || (modalType === NewPostModalType.HOME &&

                <>
                    <ButtonPub onClick={handleIsOpenModalHome}>Começar publicação</ButtonPub>

                    <ModalHome
                        isOpen={isOpenModalHome}
                        handleClose={handleCloseModalHome}
                        handleAddPhotoPost={ (event: React.ChangeEvent<HTMLInputElement>) => handleAddPhotoPost(event)}
                        handleAddVideoPost={handleAddVideoPost}
                        handleRemoveMedia={handleRemoveMedia}
                        mediaPost={mediaPost}
                    />
                </>

                ) || (modalType === NewPostModalType.DONATIONS &&

                    <>
                        <ButtonPub onClick={handleOpenModalDonations}>Começar publicação</ButtonPub>

                        <ModalDonations
                            isOpen={isOpenModalDonations}
                            handleClose={handleCloseModalDonations}
                            handleAddPhotoPost={ (event: React.ChangeEvent<HTMLInputElement>) => handleAddPhotoPost(event)}
                            handleAddVideoPost={handleAddVideoPost}
                            handleRemoveMedia={handleRemoveMedia}
                            mediaPost={mediaPost}
                        />
                    </>
                )
            }
        </Container>
    );
}