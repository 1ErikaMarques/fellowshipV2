import { ReactNode } from 'react';

export interface TabPanelProps {
    children?: ReactNode;
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