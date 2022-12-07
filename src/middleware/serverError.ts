function serverError (error: any, req: any, res:any, next:any) {
    console.log(error)
    res.status(500).json({
        status: 'failed',
        message: 'internal server error'
    })
}

export default serverError;