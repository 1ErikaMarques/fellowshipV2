import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { NewPost } from '../NewPost';
import { Container } from './styles';
import { useTheme } from 'styled-components';
import { Timeline } from '../Timeline';

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
                        <Typography>{children}</Typography>
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

export function MenuNav() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const theme = useTheme();

    return (
        <Container>
            <Box sx={{ maxWidth: 625, bgcolor: theme.colors.shape, boxShadow: '0 10px 70px rgb(0 0 0 / 5%)', height: 48 }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    TabIndicatorProps={{ style: { background: theme.colors.primary } }}
                    textColor="primary"
                >
                    <Tab label="Noticias" {...a11yProps(0)} />
                    <Tab label="Estabelecimentos" {...a11yProps(1)} />
                    <Tab label="Segurança" {...a11yProps(2)} />
                    <Tab label="Casas" {...a11yProps(3)} />
                    <Tab label="Eventos" {...a11yProps(4)} />
                    <Tab label="Doações" {...a11yProps(5)} />
                    <Tab label="Desaparecidos" {...a11yProps(6)} />
                </Tabs>

                <TabPanel value={value} index={0}>
                    <NewPost postType={PostType.NOTICIAS} modalType={NewPostModalType.DEFAULT} />
                    <Timeline />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <NewPost postType={PostType.ESTABELECIMENTOS} modalType={NewPostModalType.DEFAULT} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <NewPost postType={PostType.SEGURANCA} modalType={NewPostModalType.DEFAULT} />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <NewPost postType={PostType.CASAS} modalType={NewPostModalType.HOME} />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <NewPost postType={PostType.EVENTOS} modalType={NewPostModalType.DEFAULT} />
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <NewPost postType={PostType.DOACOES} modalType={NewPostModalType.DONATIONS} />
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <NewPost postType={PostType.DESAPARECIDOS} modalType={NewPostModalType.DEFAULT} />
                </TabPanel>
            </Box>
        </Container>
    );
}