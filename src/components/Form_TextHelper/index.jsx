"use client";

import { useWatch } from "react-hook-form";
import { useMemo } from "react";

function TextHelper({ control }) {
  const description = useWatch({
    control,
    name: "description",
  })
  const textareaState = useMemo(() => {
    return 500 - description?.length
  }, [description?.length])

  return <p className='font-sans text-neutral-500 text-sm'>{textareaState} symbols left</p>
}

export default TextHelper;
