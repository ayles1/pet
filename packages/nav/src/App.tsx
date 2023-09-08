import React, { lazy } from 'react';
import {
    Article, Header, Main, Navbar, Heading,
} from './modules/layoutModule';
import { Button } from './modules/layoutModule/ui';
import styles from './App.module.scss';

export const App = () => (
    <>
        <Header className="header">
            <div className="container">
                <span>NATALIE LAURSEN</span>
                <Navbar className="menu">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Marathon</li>
                        <li>Contact</li>
                    </ul>
                </Navbar>
            </div>
        </Header>
        <Main>
            <Article className={styles.flexArticle}>

                <section>

                    <div className="info">

                        <Heading variant="h1">
                            THE HEALTH BENEFITS OF BANANAS
                        </Heading>
                        <p>
                            Last update at
                            <time dateTime="#"> 01-07-2020 12:32PM</time>
                        </p>
                    </div>
                    <div className="info__image">

                        <img src="./shared/assets/banan.png" alt="banana" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Do eiusmod
                            tempo.
                        </p>
                        <p>
                            Incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod.
                        </p>
                    </div>
                    <br />

                    <div className="item__text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p className="block">
                            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <p className="block-1">
                            Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="line">
                            <div className="line__text">
                                <Heading variant="h4">LEAVE A COMMENT</Heading>
                                <div className="line_title">
                                    <div className="line__name"><p>Your name</p></div>
                                    <div className="line__email"><p>Your email</p></div>
                                </div>
                                <div className="line__info">
                                    <p>
                                        You seemed to read my mind. However, in the second paragraph I
                                        do not agree with the last sentence.
                                    </p>
                                </div>
                                <Button className="btn__green">SEND</Button>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="aside">
                    <Navbar className="menu__logo">
                        <Heading variant="h2">
                            CATEGORIES
                        </Heading>
                        <ul>
                            <li>All (106)</li>
                            <li>Receipts (32)</li>
                            <li>Travelings (4)</li>
                            <li>
                                <b>
                                    Health (14)
                                </b>
                            </li>
                            <li>
                                Yoga (5)
                            </li>
                        </ul>
                    </Navbar>
                    {/* <aside> */}
                    <div className="wrapper">
                        <img src="./shared/assets/follow.png" alt="follow" />
                    </div>
                    {/* </aside> */}
                </aside>
            </Article>
        </Main>
        <br />
        <footer className="footer">
            <div className="footer__logo">
                <img src="./shared/assets/girl.png" alt="girl" />
            </div>
            <h5>NATALIE LAURSEN</h5>
            <div className="icon">
                <img src="./shared/assets/icons.png" alt="icons" />
            </div>
            <div className="icon__item">
                <p>Antonova Polina 2020. All rights reserved.</p>
            </div>
        </footer>
    </>
);
