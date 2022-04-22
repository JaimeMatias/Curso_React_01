
import React from "react";
import { getGifs } from "../../../helpers/getGifs"

describe('Pruebas con getGifs Fetch', () => {

    test('debe de traer 10 elementos ', async () => {
        const gifs = await getGifs('One Punch');
        //console.log('El número de elementos que trajo son: ',gifs.length)
        expect(gifs.length).toBe(10);
    });

    test('debe de traer 0 elementos si no se envía la categoria', async () => {

        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })


})
