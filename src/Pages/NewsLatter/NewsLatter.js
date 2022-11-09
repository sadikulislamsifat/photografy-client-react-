import React from 'react';

const NewsLatter = () => {
    return (
        <div>
            <div className='mt-5'>
                <h1 className='text-xl md:text-4xl text-center'>Subscribe My News Letter</h1>
            </div>
            <div style={{height: '30vh', width: '100%'}} className=" bg-base-200 mt-3 flex justify-center items-center">
            <div className="form-control">
  <div className="input-group">
    <input type="email" placeholder="Email" className="input input-bordered" />
    <button className="btn ">
      Subscribe
    </button>
  </div>
</div>
           
           </div>
        </div>
    );
};

export default NewsLatter;