function Banner() {
    return (
        <div className="w-full h-[100px] relative">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("/banner-bg.jpg")',
                }}
            />

            <div className="absolute inset-0 bg-black opacity-50" />

        </div>
    );
}

export default Banner;
