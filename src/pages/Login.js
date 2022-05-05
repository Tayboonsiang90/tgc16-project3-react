import React from "react";

export default function Login() {
    return (
        <React.Fragment>
            <section className="py-20 bg-light overflow-hidden">
                <div className="position-relative container">
                    <div className="position-relative mw-4xl mx-auto">
                        <div className="position-absolute top-50 start-0 end-0 translate-middle-y bg-info-light ms-n6 me-n6" style={{ height: "90%" }}></div>
                        <div className="position-relative py-16 pt-md-32 pb-md-20 px-4 px-sm-8 bg-white">
                            <div className="mw-lg mx-auto text-center">
                                <div className="d-inline-block h6 mb-14" href="#">
                                    <img className="img-fluid" src="../assets/logo.jpg" alt=""></img>
                                </div>
                                <h2 className="mb-8">Signing up with social is super quick</h2>
                                <p className="mb-10 fw-bold">Please, do not hesitate</p>
                                <form action="">
                                    <input
                                        className="form-control form-control-lg mb-4"
                                        type="text"
                                        placeholder="john@example.com"
                                        style={{
                                            backgroundImage:
                                                "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==')",
                                            backgroundRepeat: "no-repeat",
                                            backgroundAttachment: "scroll",
                                            backgroundSize: "16px 18px",
                                            backgroundPosition: "98% 50%",
                                        }}
                                    ></input>
                                    <input
                                        className="form-control form-control-lg mb-4"
                                        type="password"
                                        placeholder="Password"
                                        style={{
                                            backgroundImage:
                                                "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=')",
                                            backgroundRepeat: "no-repeat",
                                            backgroundAttachment: "scroll",
                                            backgroundSize: "16px 18px",
                                            backgroundPosition: "98% 50%",
                                        }}
                                    ></input>
                                    <input
                                        className="form-control form-control-lg mb-10"
                                        type="password"
                                        placeholder="Repeat password"
                                        style={{
                                            backgroundImage:
                                                "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=')",
                                            backgroundRepeat: "no-repeat",
                                            backgroundAttachment: "scroll",
                                            backgroundSize: "16px 18px",
                                            backgroundPosition: "98% 50%",
                                        }}
                                    ></input>
                                    <div className="form-check" for="">
                                        <input className="form-check-input" type="checkbox"></input>
                                        <label className="form-check-label">By singning up, you agree to our Terms, Data Policy and Cookies.</label>
                                    </div>
                                    <button className="mt-12 mt-md-16 btn btn-dark">JOIN yofte</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
