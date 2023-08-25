import React, { useEffect } from 'react';
import gsap from 'gsap';

const ReciepteCards = () => {

    useEffect(() => {

        const cardsContainer = document.querySelector(".reciept-cards");
        const drawer = document.querySelector(".drawer");
        const close = document.querySelector(".reciepte-close");

        const tl = gsap.timeline({
            paused: true,
            reversed: true,
            onStart: function () {
                cardsContainer.style.pointerEvents = "all";
            },
            onReverseComplete: function () {
                cardsContainer.style.pointerEvents = "none";
            }
        });

        tl.from(".reciept-cards .reciept-card", 1.5, {
            y: 1000,
            stagger: {
                amount: 0.3
            },
            ease: "power4.inOut"
        }).from(".reciepte-close", 0.5, {
            scale: 0,
            delay: 1
        }, "<").from(".reciepte-footer", 0.5, {
            opacity: 0
        });

        drawer.addEventListener("click", function() {
            if (tl.reversed()) {
                tl.play();
            } else {
                tl.reverse();
            }
        });

        close.addEventListener("click", function() {
            tl.reverse();
        });

    }, []);

  return (
    <>
        <div className="reciepte-container">
            <div className="reciept-nav">
                <div className="reciept-nav-item drawer">
                    <div className="reciept-nav-icon">
                        A
                    </div>
                    <div className="reciept-nav-name">
                        One More
                    </div>
                </div>
                <div className="reciept-nav-item">
                    <div className="reciept-nav-icon">
                        A
                    </div>
                    <div className="reciept-nav-name">
                        One More
                    </div>
                </div>
                <div className="reciept-nav-item">
                    <div className="reciept-nav-icon">
                        A
                    </div>
                    <div className="reciept-nav-name">
                        One More
                    </div>
                </div>
            </div>
        </div>
        <div className="reciept-cards">
            <div className="reciepte-close">Close</div>
            <div className="reciept-card-c-1 c1 reciept-card">
                <div className="reciept-card-1">1</div>
            </div>
            <div className="reciept-card-c-2 c2 reciept-card">
                <div className="reciept-card-2">2</div>
            </div>
            <div className="reciept-card-c-3 c3 reciept-card">
                <div className="reciept-card-3">3</div>
            </div>
            <div className="reciept-card-c-4 c4 reciept-card">
                <div className="reciept-card-4">4</div>
            </div>
            <div className="reciept-card-c-5 c5 reciept-card">
                <div className="reciept-card-5">5</div>
            </div>
            <div className="reciepte-footer">Click to close</div>
        </div>
    </>
  )
}

export default ReciepteCards;