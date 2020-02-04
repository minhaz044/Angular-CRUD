package crud;

import com.fasterxml.jackson.databind.ser.Serializers;

/**
 * Created by Teshem on 1/27/2020.
 */
public class ErrorResponse extends BaseResponse {
    private int errorCode;
    private String errorDesc;
    public ErrorResponse(int errorCode,String errorDesc){
        this.isSuccess=0;
        this.errorCode=errorCode;
        this.errorDesc=errorDesc;
    }
}
