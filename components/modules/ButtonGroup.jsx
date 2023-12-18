'use client'
import { supabase } from "@/lib/supabase"
import { useContext } from "react"
import { useRouter } from "next/navigation";
import { NewContext } from "@/context/NewContext"
import { CANCEL } from '@/constants/constantNewPage'
import CancelButton from '@/components/elements/new/CancelButton'
import RegisterAdButton from '@/components/elements/new/RegisterAdButton'
import { REGISTERADVERTISE } from '@/constants/constantNewPage'
import { REGex } from "@/constants/constantNewPage";

export default function ButtonGroup() {
    const router = useRouter();

    const {
        isValidName,
        isValidSellerName,
        isValidPrice,
        isValidPhoneNumber,
        setIsValidCity,
        setIsValidProvince,
        values,
        setIsValidName,
        setIsValidPhoneNumber,
        setIsValidSellerName,
        setIsValidPrice,
        imageUrl,
        gameLocation,
        isValidPlatform,
        isValidCity,
        isValidProvince,
        setIsValidPlatform,
    } = useContext(NewContext);
    const {
        name,
        price,
        preferedExchange,
        moreInfo, platformId,
        cityId, provinceId,
        exchange,
        sellername,
        phonenumber,

    } = values;
    const insertData = {
        name: name,
        platformId: platformId || null,
        moreInfo: moreInfo || null,
        price: price || null,
        cityId: cityId,
        provinceId: provinceId,
        preferedExchange: preferedExchange || null,
        exchange: exchange || null,
        imageUrl: imageUrl || null
    }
    const handleInsertData = async () => {
        const result = REGex.test(phonenumber);
        if (!result && !phonenumber.trim()) setIsValidPhoneNumber(false);
        if (result && phonenumber.trim()) setIsValidPhoneNumber(true);
        if (!name.trim()) setIsValidName(false)
        if (!sellername.trim()) setIsValidSellerName(false)
        if (!price.trim()) setIsValidPrice(false);
        if (!provinceId) setIsValidProvince(false);
        if (!cityId) setIsValidCity(false);
        if (!platformId) setIsValidPlatform(false)

        if ((isValidName && isValidPhoneNumber && isValidSellerName && isValidPlatform && isValidCity && isValidProvince) === true) {
            const { data, error } = await supabase
                .from('games')
                .insert([insertData,
                ])
                .select()
            if (data) {
                for (let v of Object.keys(values)) {
                    values[v] = ""
                }
            }
            router.back()
        }

        else {
            console.log('not send');
        }
    }
    return (
        <>
            <CancelButton text={CANCEL} />
            <RegisterAdButton text={REGISTERADVERTISE} handleClick={handleInsertData} />
        </>
    )
}
