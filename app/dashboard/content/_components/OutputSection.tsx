import React,{useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Button } from '@/components/ui/button';
import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';

interface PROPS{
  aiOutput:string
}
function OutputSection({aiOutput}:PROPS) {
  const editorRef:any=useRef();

useEffect(()=>{
const editorInstance=editorRef.current.getInstance()
editorInstance.setMarkdown(aiOutput);
})

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
    <div className='flex justify-center items-center p-2'>
  <h2 className='font-bold'>Your Result</h2>
  <Button className='ml-auto flex items-center'><Copy className='w-3 h-3 mr-1'/>Copy</Button>
</div>

    
        <Editor
        ref={editorRef}
    initialValue="Your Result will Appear here"
    // previewStyle="vertical"
    height="600px"
    initialEditType="wysiwyg"
    useCommandShortcut={true}
    onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
  />
    </div>
  )
}

export default OutputSection
