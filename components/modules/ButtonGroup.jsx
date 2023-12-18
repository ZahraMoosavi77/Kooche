'use client'
import { supabase } from "@/lib/supabase"
import { useContext } from "react"
import { NewContext } from "@/context/NewContext"
import { CANCEL } from '@/constants/constantNewPage'
import CancelButton from '@/components/elements/new/CancelButton'
import RegisterAdButton from '@/components/elements/new/RegisterAdButton'
import { REGISTERADVERTISE } from '@/constants/constantNewPage'

export default function ButtonGroup() {
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
        gameLocation
      } = useContext(NewContext);
      const {
        name,
        price,
        preferedExchange,
        moreInfo, platformId,
        cityId, provinceId,
        exchange
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
        if (!values.name.trim()) setIsValidName(false)
        if (!values.sellername.trim()) setIsValidSellerName(false)
        if (!values.price.trim()) setIsValidPrice(false);
        if (!values.phonenumber.trim()) setIsValidPhoneNumber(false);
        if (!values.platformId) setIsValidProvince(false);
        if (!values.cityId) setIsValidCity(false);

        if ((isValidName && isValidPrice && isValidPhoneNumber && isValidSellerName ) === true) {
          const { data, error } = await supabase
            .from('games')
            .insert([insertData,
            ])
            .select()
        }
      }
    return (
        <>
            <CancelButton text={CANCEL} />
            <RegisterAdButton text={REGISTERADVERTISE} handleClick={handleInsertData} />
        </>
    )
}
