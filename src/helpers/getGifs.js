

export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ category }&limit=10&api_key=uGkdw3ADDA7P2QrsHU5AP9pKMkBt2i3E`;
    const  response = await fetch( url );

    const { data } = await response.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}