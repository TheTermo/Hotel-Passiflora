import React, {useState, useEffect} from 'react';

const CurrencyConverter = ({roomPrice}) => {
    const grayTextStyle = {color: 'gray'};
    const [exchangeRates, setExchangeRates] = useState({euro: null, dollar: null});

    useEffect(() => {
        const euroRate = 0.22792;
        const dollarRate = 0.24779;

        setExchangeRates({euro: euroRate, dollar: dollarRate});
    }, [roomPrice]);

    const convertToEuro = (price) => {
        return (price * exchangeRates.euro).toFixed(2);
    };

    const convertToDollar = (price) => {
        return (price * exchangeRates.dollar).toFixed(2);
    };

    return (
        <div>
            <p style={grayTextStyle}>{convertToEuro(roomPrice)} euro</p>
            <p style={grayTextStyle}>{convertToDollar(roomPrice)} dolara</p>
        </div>
    );
};

export default CurrencyConverter;