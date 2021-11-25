import React, { useState } from "react";
import "./css/index.css";

function Home() {
    return (
        <div className="Home">
            <div className="card">
                <div className="card-left">
                    <div className="page__content homepage">
                        <section
                            class="card-link-section aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="500"
                        >
                            <div class="card-link-section__inner center">
                                <div class="card-link-section__content center">
                                    <h1>Store data, permanently.</h1>
                                    <p>Arweave enables you</p>
                                    <p>
                                        {" "}
                                        to store documents and applications
                                        forever.
                                    </p>
                                    <a
                                        class="btn"
                                        href="//arwiki.wiki/#/en/main"
                                    >
                                        Browse The Wiki [BETA]
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="card-right">
                    <div className="data-list">
                        <div className="list-item">
                            <div className="list-item-top">
                                <span>ADDRESSES</span>
                            </div>
                            <div className="list-item-bottom">130,035</div>
                        </div>
                        <div className="list-item">
                            <div className="list-item-top">
                                <span>TRANSACTIONS</span>
                            </div>
                            <div className="list-item-bottom">130,035</div>
                        </div>
                        <div className="list-item">
                            <div className="list-item-top">
                                <span>DATA STORED</span>
                            </div>
                            <div className="list-item-bottom">130,035</div>
                        </div>
                        <div className="list-item">
                            <div className="list-item-top">
                                <span>BLOCK HEIGHT</span>
                            </div>
                            <div className="list-item-bottom">130,035</div>
                        </div>
                        <div className="list-item">
                            <div className="list-item-top">
                                <span>NODES</span>
                            </div>
                            <div className="list-item-bottom">130,035</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
