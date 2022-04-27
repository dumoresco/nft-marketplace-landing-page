import { useState } from 'react';

import Header from './components/Header';
import HeroHeader from './components/HeroHeader';
import MenuMobile from './components/Menu mobile';
import GlobalStyles from './styles/GlobalStyles';
import Collections from './components/Collections/index.';

import { HiddenGames, Title, CardContainer } from './styles/appStyles';
import image1 from './assets/image1.png';
import user1 from './assets/user1.png';

function App() {
    const [menuIsVisible, setMenuIsVisible] = useState(false);
    return (
        <>
            <MenuMobile
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
            />
            <Header setMenuIsVisible={setMenuIsVisible} />
            <HeroHeader />
            <HiddenGames>
                <Title>Top Collections</Title>
                <CardContainer>
                    <Collections
                        imageUrl={image1}
                        userUrl={user1}
                        name="ZombieClub Token"
                        username="ZombieLab"
                        description="Zombie Lab is a collection of 10,000 animated NFTs. Each NFT is unique and resides on the Ethereum blockchain. Your Zombie Lab Club NFT will double as your club membership."
                    />
                    <Collections
                        imageUrl={image1}
                        userUrl={user1}
                        name="ZombieClub Token"
                        username="ZombieLab"
                        description="Zombie Lab is a collection of 10,000 animated NFTs. Each NFT is unique and resides on the Ethereum blockchain. Your Zombie Lab Club NFT will double as your club membership."
                    />
                    <Collections
                        imageUrl={image1}
                        userUrl={user1}
                        name="ZombieClub Token"
                        username="ZombieLab"
                        description="Zombie Lab is a collection of 10,000 animated NFTs. Each NFT is unique and resides on the Ethereum blockchain. Your Zombie Lab Club NFT will double as your club membership."
                    />
                </CardContainer>
            </HiddenGames>
            <GlobalStyles />
        </>
    );
}

export default App;
