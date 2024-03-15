import Button from '../components/Button';
import HeadingTitle from '../components/HeadingTitle';
import Section from '../components/Section';

const Donate = () => {
    return (
        <>
            <HeadingTitle title="Donate" />
            <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 lg:mt-12">
                <div className="w-full h-[300px] relative lg:h-full">
                    <img
                        className="w-full h-full object-cover"
                        src="\photos\learn.jpg"
                        alt="orangutan"
                    />
                    <div className="absolute bottom-0 py-4 px-6 lg:py-6 lg:px-8 bg-black/50 w-full">
                        <h2 className="text-white font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold">
                            "Your Donation:
                            <br />A Lifeline for Orangutans.
                            <br />
                            Support Today."
                        </h2>
                    </div>
                </div>
                <Section
                    className="lg:p-8"
                    title="Select the amount of donation"
                    more={false}
                >
                    <div className="flex flex-col gap-12">
                        <section className="grid grid-cols-2 gap-y-8 gap-x-16 lg:grid-cols-4 lg:gap-4">
                            <div className="bg-primary-green/80 hover:bg-primary-green/90 transition-colors duration-200 rounded-lg p-3 lg:p-2 text-center cursor-pointer">
                                <span className="text-2xl lg:text-xl font-playfair text-white font-medium">
                                    $ 15.00
                                </span>
                            </div>
                            <div className="bg-primary-green/80 hover:bg-primary-green/90 transition-colors duration-200 rounded-lg p-3 lg:p-2 text-center cursor-pointer">
                                <span className="text-2xl lg:text-xl font-playfair text-white font-medium">
                                    $ 10.00
                                </span>
                            </div>
                            <div className="bg-primary-green/80 hover:bg-primary-green/90 transition-colors duration-200 rounded-lg p-3 lg:p-2 text-center cursor-pointer">
                                <span className="text-2xl lg:text-xl font-playfair text-white font-medium">
                                    $ 5.00
                                </span>
                            </div>
                            <div className="bg-primary-green/80 hover:bg-primary-green/90 transition-colors duration-200 rounded-lg p-3 lg:p-2 text-center cursor-pointer">
                                <span className="text-2xl lg:text-xl font-playfair text-white font-medium">
                                    $ 20.00
                                </span>
                            </div>
                        </section>
                        <section>
                            <div></div>
                            <form className="flex flex-col gap-4">
                                <div className="">
                                    <label htmlFor="cardName">
                                        Card Holder Name
                                    </label>
                                    <input
                                        type="text"
                                        name="cardName"
                                        id="cardName"
                                        placeholder="Jhontri Boyke"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="cardNumber">
                                        Card Number
                                    </label>
                                    <input
                                        type="number"
                                        name="cardNumber"
                                        id="cardNumber"
                                        placeholder="+1234 1234 1234 1234"
                                    />
                                </div>
                                <div className="grid grid-cols-5 gap-4">
                                    <div className="col-span-2">
                                        <label htmlFor="date">
                                            Expired Date
                                        </label>
                                        <input
                                            type="text"
                                            name="date"
                                            id="date"
                                            placeholder="01/24"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="CVV">CVV</label>
                                        <input
                                            type="number"
                                            name="CVV"
                                            id="CVV"
                                            placeholder="123"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label htmlFor="zipCode">
                                            Zip / Postal Code
                                        </label>
                                        <input
                                            type="text"
                                            name="zipCode"
                                            id="zipCode"
                                            placeholder="75314"
                                        />
                                    </div>
                                </div>
                                <Button className="bg-primary-green hover:bg-primary-green/90 mt-6 min-w-full">
                                    Donate
                                </Button>
                            </form>
                        </section>
                    </div>
                    <div className="mt-12">
                        <h3 className="text-primary-black font-playfair text-xl underline text-center">
                            Need help ?
                        </h3>
                    </div>
                </Section>
            </main>
        </>
    );
};

export default Donate;
